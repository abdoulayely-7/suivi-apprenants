import { PrismaClient, Tag } from "@prisma/client";

import { ITagRepository } from "./interfaces/ITagRepository.js";


export class TagRepository implements ITagRepository {
  private prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async findAll(): Promise<Tag[]> {
    return this.prisma.tag.findMany({
      include: {
        briefTags: {
          include: {
            brief: true, 
          },
        },
      },
    });
  }

  async findById(id: number): Promise<Tag | null> {
    return this.prisma.tag.findUnique({
      where: { id },
      include: {
        briefTags: {
          include: {
            brief: true,
          },
        },
      },
    });
  }

  async create(data: Omit<Tag, "id">): Promise<Tag> {
    return this.prisma.tag.create({
      data,
      include: {
        briefTags: {
          include: {
            brief: true,
          },
        },
      },
    });
  }

  async update(id: number, data: Partial<Tag>): Promise<Tag> {
    return this.prisma.tag.update({
      where: { id },
      data,
      include: {
        briefTags: {
          include: {
            brief: true,
          },
        },
      },
    });
  }

  async delete(id: number): Promise<void> {
    await this.prisma.tag.delete({
      where: { id },
    });
  }
}
