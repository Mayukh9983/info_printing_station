import { S3Client, PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { nanoid } from "nanoid";

const s3Client = new S3Client({
  region: process.env.AWS_REGION || "us-east-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
  },
});

const BUCKET_NAME = process.env.AWS_S3_BUCKET || "info-printing-station";

export async function uploadFile(fileBuffer: Buffer, fileName: string, mimeType: string) {
  const fileKey = `orders/${nanoid()}/${fileName}`;

  try {
    const command = new PutObjectCommand({
      Bucket: BUCKET_NAME,
      Key: fileKey,
      Body: fileBuffer,
      ContentType: mimeType,
    });

    await s3Client.send(command);

    // Generate a presigned URL for download
    const getCommand = new GetObjectCommand({
      Bucket: BUCKET_NAME,
      Key: fileKey,
    });

    const fileUrl = await getSignedUrl(s3Client, getCommand, { expiresIn: 604800 }); // 7 days

    return { fileKey, fileUrl };
  } catch (error) {
    console.error("S3 upload error:", error);
    throw new Error("Failed to upload file to S3");
  }
}

export async function getFileDownloadUrl(fileKey: string) {
  try {
    const command = new GetObjectCommand({
      Bucket: BUCKET_NAME,
      Key: fileKey,
    });

    const fileUrl = await getSignedUrl(s3Client, command, { expiresIn: 604800 });
    return fileUrl;
  } catch (error) {
    console.error("S3 download URL error:", error);
    throw new Error("Failed to generate download URL");
  }
}
