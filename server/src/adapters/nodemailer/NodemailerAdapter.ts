import nodemailer from 'nodemailer';
import { IMailAdapter, SendMailData } from "../IMailAdapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "614df7df14a582",
    pass: "3bd31b8fac7acf"
  }
});

export class NodemailerAdapter implements IMailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Henrique Makita <henrike_kh1@hotmail.com>',
      subject,
      html: body
    });
  };

}