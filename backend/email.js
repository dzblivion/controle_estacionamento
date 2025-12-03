
const nodemailer = require("nodemailer");

const nome = process.argv[2];
const email = process.argv[3];
const token = process.argv[4];
const id = process.argv[5];

if (!email) {
    console.log("Email não informado!");
    process.exit();
}

if (!token) {
    console.log("Token não informado!");
    process.exit();
}

const link = `http://localhost:4200/recuperarSenha.php?id=${id}&token=${token}`;

async function enviar() {

    const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "deyvideukcosta.dc@gmail.com",
        pass: "lgod wgwg axtc dtsb"
    }
});


    const html = `
        <!DOCTYPE html>
        <html lang="pt-BR">
            <head>
                <meta charset="UTF-8">
                <title>Recuperação de Senha</title>
            </head>
            <body style="margin:0; padding:0; font-family: Arial, Helvetica, sans-serif; background-color:#f3f3f3;">
                <table width="100%" cellspacing="0" cellpadding="0" style="background-color:#f3f3f3; padding: 40px 0;">
                    <tr>
                    <td align="center">
                        <table width="100%" style="max-width:500px; background:white; border-radius:10px; overflow:hidden; box-shadow:0 4px 10px rgba(0,0,0,0.1);">
                        
                        <!-- HEADER -->
                        <tr>
                            <td style="background:#2b6777; padding:20px; text-align:center; color:white;">
                            <h2 style="margin:0; font-size:24px;">Recuperação de Senha</h2>
                            </td>
                        </tr>

                        <!-- TEXTO -->
                        <tr>
                            <td style="padding:25px; color:#333;">
                            <p style="font-size:16px; margin-bottom:20px;">
                                Olá, <b> ${nome} </b> 👋
                            </p>

                            <p style="font-size:16px; margin-bottom:20px;">
                                Recebemos uma solicitação para redefinir a sua senha.  
                                Caso você realmente tenha solicitado, clique no botão abaixo:
                            </p>

                            <!-- BOTÃO -->
                            <div style="text-align:center; margin: 30px 0;">
                                <a href="${link}" style="
                                padding: 14px 22px;
                                background: #2b6777;
                                color: white;
                                text-decoration: none;
                                font-size: 16px;
                                font-weight: bold;
                                border-radius: 6px;
                                display: inline-block;">
                                Redefinir Senha
                                </a>
                            </div>


                            <p style="font-size:14px; color:#666; margin-bottom:20px;">
                                Se você <b>não solicitou</b> esta alteração, apenas ignore este e-mail.  
                                Seu acesso permanecerá o mesmo.
                            </p>

                            <p style="font-size:14px; color:#666;">
                                Este link é válido por 30 minutos.
                            </p>
                            </td>
                        </tr>

                        <!-- FOOTER -->
                        <tr>
                            <td style="background:#2b6777; padding:15px; text-align:center; color:white; font-size:12px;">
                            © ${new Date().getFullYear()} - Sistema de Controle de Estacionamento<br>
                            Não responda este e-mail — envio automático.
                            </td>
                        </tr>

                        </table>
                    </td>
                    </tr>
                </table>
            </body>
        </html>`

    const mailOptions = {
        from: "deyvideukcosta.dc@gmail.com",
        to: email,
        subject: "Recuperação de Senha",
        html: html
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log("Email enviado:", info.response);
    } catch (e) {
        console.log("Erro:", e);
    }
}

enviar();

