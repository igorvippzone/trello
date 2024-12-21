import { Injectable } from '@nestjs/common'
import { TimeBlockDto } from './dto/time-block.dto'
import { PrismaService } from '../prisma.service'

@Injectable()
export class TimeBlockService {
	constructor(private prisma: PrismaService) {}

	async getAll(userId: string) {
		return this.prisma.timeBlock.findMany({
			where: {
				userId
			},
			orderBy: {
				order: 'asc'
			}
		})
	}

	async create(dto: TimeBlockDto, userId: string) {
		return this.prisma.timeBlock.create({
			data: {
				...dto,
				user: {
					connect: {
						id: userId
					}
				}
			}
		})
	}

	async update(
		dto: Partial<TimeBlockDto>,
		timeBlockId: string,
		userId: string
	) {
		return this.prisma.timeBlock.update({
			where: {
				userId,
				id: timeBlockId
			},
			data: dto
		})
	}

	async delete(timeBlockId: string, userId: string) {
		return this.prisma.timeBlock.delete({
			where: {
				id: timeBlockId,
				userId
			}
		})
	}

	async updatetOrder(ids: string[]) {
		return this.prisma.$transaction(
			ids.map((id, order) =>
				this.prisma.timeBlock.update({
					where: { id },
					data: { order }
				})
			)
		)
	}
}
