import { createTransport } from "nodemailer";
import { text } from "stream/consumers";
const mail = process.env.MAIL!;
const pass = process.env.PASS!;
export const handleSendMail = async ({
    senderMail,
    senderName,
    subject,
    body = null,
}: {
    body: string | null;
    subject: string;
    senderName: string;
    senderMail: string;
}) => {
    "use server";
    const htmlContent = `
    <div style="width: 100%; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
            <div style="text-align: center; background-color: #f8f8f8; padding: 10px 0;">
                <h1 style="margin: 0;">Congratulations, ${senderName.split(" ")[0]} !</h1>
            </div>
            <div style="padding: 20px;">
                <p>You just opened a new chapter in our professional relationship. Your inquiry has been received. I'm very excited at the prospect of working with you!</p>
                <h2 style="margin-top: 20px;">What's next?</h2>
                <p>I will carefully review your inquiry and get back to you within 24hrs.</p>
                <p style="margin-top: 20px;">Best,<br>John Onyango</p>
            </div>
        </div>
    `;

    const transporter = createTransport({
        service: "gmail",
        auth: {
            user: mail,
            pass: pass,
        },
    });

    let mailOptions = {
        from: mail,
        to: senderMail,
        subject: subject,
        html: htmlContent,
        text: "",
    };
    if (body) {
        mailOptions = {
            from: senderMail,
            to: mail,
            subject: subject,
            html: "",
            text: body,
        };
    }
    await new Promise((resolve, reject) => {
        // send mail
        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.error(err);
                reject(err);
            } else {
                console.log(info);
                resolve(info);
            }
        });
    });
};
