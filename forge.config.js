import { MakerSquirrel } from "@electron-forge/maker-squirrel";

const config = {
  packagerConfig: {
    icon: "./icon",
    executableName: "SpeakUp",
  },
  makers: [
    new MakerSquirrel({
      // CamelCase version without spaces
      name: "SpeakUp",
      // Mandatory metadata for Squirrel.Windows
      authors: "Javlon",
      description:
        "SpeakUp Desktop Application - Practice and improve your speaking skills",
      config: {
        setupIcon: "./icon.ico",
        setupExe: "SpeakUpSetup.exe",
        iconUrl: "https://speakup.edumoacademy.uz/icon.ico",
        createDesktopShortcut: true,
        createStartMenuShortcut: true,
      },
    }),
  ],
};

module.exports = config;
