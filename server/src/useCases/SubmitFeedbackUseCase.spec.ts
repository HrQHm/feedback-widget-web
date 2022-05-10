import { SubmitFeedbackUseCase } from "./SubmitFeedbackUseCase";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
  { create:createFeedbackSpy},
  { sendMail:sendMailSpy}
);

describe('Submit feeback', () =>{
  it('should be able to submit a feedback', async() =>{
    expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'Comment test',
      screenshot: 'data:image/png;base64,yaduidha'
    })).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it('should not be able to submit a feedback withou type', async() =>{
    expect(submitFeedback.execute({
      type: '',
      comment: 'Comment test',
      screenshot: 'data:image/png;base64,yaduidha'
    })).rejects.toThrow();
  });

  it('should not be able to submit a feedback withou comment', async() =>{
    expect(submitFeedback.execute({
      type: 'BUG',
      comment: '',
      screenshot: 'data:image/png;base64,yaduidha'
    })).rejects.toThrow();
  });

  it('should not be able to submit a feedback with an invalid screenshot', async() =>{
    expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'test comment',
      screenshot: 'test.jpg'
    })).rejects.toThrow();
  });
});