import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const OWNER_EMAIL = "nik.gardenservices@gmail.com";
const FROM_EMAIL = "enquiries@littleastonparkservices.co.uk";
const BUSINESS_NAME = "Little Aston Park Services";

function ownerEmailHtml({ name, email, phone, message }: { name: string; email: string; phone: string; message: string }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin:0;padding:0;background:#f8f9f3;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8f9f3;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:20px;overflow:hidden;box-shadow:0 4px 24px rgba(15,51,32,0.10);">
          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#0f3320 0%,#1a4731 40%,#2d7a4f 100%);padding:40px 40px 32px;text-align:left;">
              <p style="margin:0 0 8px;font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#6ee7b7;">New Enquiry</p>
              <h1 style="margin:0 0 8px;font-size:28px;font-weight:800;color:#ffffff;line-height:1.15;">You have a new message</h1>
              <p style="margin:0;font-size:14px;color:rgba(255,255,255,0.65);">Submitted via the ${BUSINESS_NAME} website contact form</p>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:36px 40px 28px;">
              <!-- Info tiles -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding-bottom:16px;">
                    <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8f9f3;border-radius:12px;overflow:hidden;">
                      <tr>
                        <td style="padding:14px 20px;border-left:4px solid #2d7a4f;">
                          <p style="margin:0 0 2px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:2px;color:#6b7280;">Full Name</p>
                          <p style="margin:0;font-size:16px;font-weight:700;color:#0f3320;">${name}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom:16px;">
                    <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8f9f3;border-radius:12px;overflow:hidden;">
                      <tr>
                        <td style="padding:14px 20px;border-left:4px solid #2d7a4f;">
                          <p style="margin:0 0 2px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:2px;color:#6b7280;">Email Address</p>
                          <p style="margin:0;font-size:16px;font-weight:700;color:#0f3320;"><a href="mailto:${email}" style="color:#2d7a4f;text-decoration:none;">${email}</a></p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                ${phone ? `<tr>
                  <td style="padding-bottom:16px;">
                    <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8f9f3;border-radius:12px;overflow:hidden;">
                      <tr>
                        <td style="padding:14px 20px;border-left:4px solid #2d7a4f;">
                          <p style="margin:0 0 2px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:2px;color:#6b7280;">Phone Number</p>
                          <p style="margin:0;font-size:16px;font-weight:700;color:#0f3320;"><a href="tel:${phone}" style="color:#2d7a4f;text-decoration:none;">${phone}</a></p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>` : ""}
                <tr>
                  <td style="padding-bottom:8px;">
                    <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8f9f3;border-radius:12px;overflow:hidden;">
                      <tr>
                        <td style="padding:14px 20px;border-left:4px solid #2d7a4f;">
                          <p style="margin:0 0 8px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:2px;color:#6b7280;">Message</p>
                          <p style="margin:0;font-size:15px;color:#374151;line-height:1.65;white-space:pre-wrap;">${message}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- CTA -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:28px;">
                <tr>
                  <td>
                    <a href="mailto:${email}" style="display:inline-block;padding:14px 32px;background:linear-gradient(135deg,#1a4731,#2d7a4f);color:#ffffff;font-size:14px;font-weight:700;text-decoration:none;border-radius:50px;letter-spacing:0.5px;">Reply to ${name}</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background:#0f3320;padding:24px 40px;text-align:center;">
              <p style="margin:0;font-size:12px;color:rgba(255,255,255,0.5);">&copy; ${new Date().getFullYear()} ${BUSINESS_NAME} &mdash; Sutton Coldfield, West Midlands</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function customerEmailHtml({ name }: { name: string }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin:0;padding:0;background:#f8f9f3;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8f9f3;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:20px;overflow:hidden;box-shadow:0 4px 24px rgba(15,51,32,0.10);">
          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#0f3320 0%,#1a4731 40%,#2d7a4f 100%);padding:40px 40px 32px;text-align:left;">
              <p style="margin:0 0 8px;font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#6ee7b7;">Message Received</p>
              <h1 style="margin:0 0 8px;font-size:28px;font-weight:800;color:#ffffff;line-height:1.15;">Thanks for getting<br/>in touch, ${name.split(" ")[0]}!</h1>
              <p style="margin:0;font-size:14px;color:rgba(255,255,255,0.65);">${BUSINESS_NAME}</p>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:36px 40px 28px;">
              <p style="margin:0 0 20px;font-size:15px;color:#374151;line-height:1.7;">We've received your message and one of our team will be in touch with you as soon as possible — usually within <strong style="color:#0f3320;">24 hours</strong>.</p>

              <!-- Promise card -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background:linear-gradient(135deg,#f0fdf4,#ecfdf5);border:1px solid #d1fae5;border-radius:16px;margin-bottom:28px;">
                <tr>
                  <td style="padding:24px 28px;">
                    <p style="margin:0 0 12px;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:2px;color:#065f46;">What happens next?</p>
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding:6px 0;">
                          <table cellpadding="0" cellspacing="0">
                            <tr>
                              <td style="width:24px;vertical-align:top;padding-top:2px;">
                                <span style="display:inline-block;width:8px;height:8px;background:#2d7a4f;border-radius:50%;"></span>
                              </td>
                              <td style="font-size:14px;color:#374151;padding-left:8px;">We review your enquiry and consider the best approach</td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:6px 0;">
                          <table cellpadding="0" cellspacing="0">
                            <tr>
                              <td style="width:24px;vertical-align:top;padding-top:2px;">
                                <span style="display:inline-block;width:8px;height:8px;background:#2d7a4f;border-radius:50%;"></span>
                              </td>
                              <td style="font-size:14px;color:#374151;padding-left:8px;">A member of our team reaches out to discuss your needs</td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:6px 0;">
                          <table cellpadding="0" cellspacing="0">
                            <tr>
                              <td style="width:24px;vertical-align:top;padding-top:2px;">
                                <span style="display:inline-block;width:8px;height:8px;background:#2d7a4f;border-radius:50%;"></span>
                              </td>
                              <td style="font-size:14px;color:#374151;padding-left:8px;">We provide a free, no-obligation quote tailored to you</td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Contact options -->
              <p style="margin:0 0 16px;font-size:14px;color:#6b7280;">If you need to reach us sooner, you're welcome to call or email directly:</p>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding-bottom:10px;">
                    <a href="tel:+447500732083" style="display:inline-block;font-size:14px;font-weight:600;color:#2d7a4f;text-decoration:none;">&#128222; +44 7500 732083</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="mailto:enquiries@littleastonparkservices.co.uk" style="display:inline-block;font-size:14px;font-weight:600;color:#2d7a4f;text-decoration:none;">&#9993; enquiries@littleastonparkservices.co.uk</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background:#0f3320;padding:24px 40px;text-align:center;">
              <p style="margin:0 0 6px;font-size:13px;font-weight:600;color:rgba(255,255,255,0.8);">${BUSINESS_NAME}</p>
              <p style="margin:0;font-size:12px;color:rgba(255,255,255,0.45);">Sutton Coldfield, West Midlands &mdash; &copy; ${new Date().getFullYear()}</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const [ownerResult, customerResult] = await Promise.all([
      resend.emails.send({
        from: FROM_EMAIL,
        to: OWNER_EMAIL,
        replyTo: email,
        subject: `New enquiry from ${name} — ${BUSINESS_NAME}`,
        html: ownerEmailHtml({ name, email, phone: phone || "", message }),
      }),
      resend.emails.send({
        from: FROM_EMAIL,
        to: email,
        subject: `We've received your message — ${BUSINESS_NAME}`,
        html: customerEmailHtml({ name }),
      }),
    ]);

    if (ownerResult.error || customerResult.error) {
      console.error("Resend errors:", ownerResult.error, customerResult.error);
      return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
