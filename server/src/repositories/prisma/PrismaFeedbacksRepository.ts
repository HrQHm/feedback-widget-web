
import { prisma } from '../../prisma';
import { IFeedbacksRepository, FeedbacksCreateData } from './../IFeedbacksRepository'

export class PrismaFeedbacksRepository implements IFeedbacksRepository {
  async create ({type, comment, screenshot}: FeedbacksCreateData) {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot
      }
    });
  };
  
}