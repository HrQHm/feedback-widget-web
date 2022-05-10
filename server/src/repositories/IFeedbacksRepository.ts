export interface FeedbacksCreateData {
  type: string;
  comment: string;
  screenshot?: string;
}

export interface IFeedbacksRepository {
  create:(data:FeedbacksCreateData) => Promise<void>;
}