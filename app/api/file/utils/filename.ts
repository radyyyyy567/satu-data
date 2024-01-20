import crypto from 'crypto';

export function getFileExtension(fileName: string): string {
  return fileName.split('.').pop()?.toLowerCase() || '';
}

export function generateFileNameHash(buffer: ArrayBuffer): string {
  return crypto.createHash('md5').update(Buffer.from(buffer)).digest('hex');
}

export function generateDateString(): string {
  const currentDate = new Date();
  return `${currentDate.getFullYear()}${(currentDate.getMonth() + 1)
    .toString()
    .padStart(2, '0')}${currentDate
    .getDate()
    .toString()
    .padStart(2, '0')}-${currentDate
    .getHours()
    .toString()
    .padStart(2, '0')}${currentDate
    .getMinutes()
    .toString()
    .padStart(2, '0')}${currentDate
    .getSeconds()
    .toString()
    .padStart(2, '0')}`;
}

export function generateUniqueFileName(fileBuffer: ArrayBuffer, fileExtension: string): string {
  const fileNameHash = generateFileNameHash(fileBuffer);
  const dateString = generateDateString();
  return `${fileNameHash}-${dateString}.${fileExtension}`;
}
