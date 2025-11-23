import { MakerSquirrel } from "@electron-forge/maker-squirrel";

const config = {
  packagerConfig: {
    icon: "./icon",
    executableName: "Mockmee",
  },
  makers: [
    new MakerSquirrel({
      // CamelCase version without spaces
      name: "Mockmee",
      // Mandatory metadata for Squirrel.Windows
      authors: "Javlon",
      description:
        "Mockmee Desktop Application - IELTS Mock Test Platform",
      config: {
        setupIcon: "./icon.ico",
        setupExe: "MockmeeSetup.exe",
        iconUrl: "https://platform.mockmee.uz/icon.ico",
        createDesktopShortcut: true,
        createStartMenuShortcut: true,
      },
    }),
  ],
};

module.exports = config;
