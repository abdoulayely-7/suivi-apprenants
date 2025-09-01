export class TagRepository {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
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
    async findById(id) {
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
    async create(data) {
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
    async update(id, data) {
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
    async delete(id) {
        await this.prisma.tag.delete({
            where: { id },
        });
    }
}
//# sourceMappingURL=TagRepository.js.map