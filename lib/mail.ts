import { createTransport, getTestMessageUrl } from 'nodemailer';

const transport = createTransport({
  host: process.env.MAIL_HOST,
  port: Number(process.env.MAIL_PORT),
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

function makeEmail(text: string) {
  return `
        <div style="
            border: 1px solid black;
            padding: 20px;
            font-family: sans-serif;
            line-height: 2;
            font-size: 20px;        
        ">
            <h2>Olá!</h2>
            <p>${text}</p>
        </div>
    `;
}

export async function sendPasswordResetEmail(
  resetToken: string,
  to: string,
): Promise<void> {
  const info = await transport.sendMail({
    to,
    from: process.env.ADMIN_MAIL,
    subject: 'Your password reset token!',
    html: makeEmail(`Your Password reset token is here! 
    
    <a href="${process.env.FRONTEND_URL}/reset?token=${resetToken}"> Click here to reset</a>    
    `),
  });

  if (process.env.MAIL_USER.includes('ethereal_email')) {
    // eslint-disable-next-line no-console
    console.log(`Message sent! Preview it at ${getTestMessageUrl(info)}`);
  }
}
