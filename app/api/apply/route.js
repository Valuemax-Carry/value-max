import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const formData = await req.formData();

    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const dob = formData.get("dob");
    const gender = formData.get("gender");
    const cnic = formData.get("cnic");
    const cell = formData.get("cell");
    const email = formData.get("email");
    const qualification = formData.get("qualification");
    const position = formData.get("position");
    const message = formData.get("message");
    const file = formData.get("file");

    if (!firstName || !lastName || !cell || !email) {
      return Response.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const attachments = [];
    if (file && typeof file === "object" && file.size > 0) {
      const buffer = Buffer.from(await file.arrayBuffer());
      attachments.push({
        filename: file.name,
        content: buffer,
      });
    }

    const htmlBody = `
      <h2>New Job Application</h2>
      <p><strong>First Name:</strong> ${firstName}</p>
      <p><strong>Last Name:</strong> ${lastName}</p>
      <p><strong>Date of Birth:</strong> ${dob || "-"}</p>
      <p><strong>Gender:</strong> ${gender || "-"}</p>
      <p><strong>CNIC:</strong> ${cnic || "-"}</p>
      <p><strong>Cell Number:</strong> ${cell}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Qualification:</strong> ${qualification || "-"}</p>
      <p><strong>Position:</strong> ${position || "-"}</p>
      <p><strong>Message:</strong><br/>${message || "-"}</p>
    `;

    await transporter.sendMail({
      from: `"Careers Form" <${process.env.SMTP_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      replyTo: email,
      subject: `New Application: ${firstName} ${lastName}`,
      html: htmlBody,
      attachments,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error("Apply form error:", err);
    return Response.json(
      { success: false, error: "Failed to send application" },
      { status: 500 }
    );
  }
}