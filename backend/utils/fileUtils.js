import os from 'node:os';
import fs from "fs/promises";
import path from "path";

export const deleteImage = async (relativePath) => {
    try {
        console.log("PATH: ", relativePath);
        const file = path.join(process.cwd(), relativePath)
        console.log("File: ", file)
        await fs.unlink(file)
        return true;
    } catch (error) {
        console.log("error")
        return false;
    }
}