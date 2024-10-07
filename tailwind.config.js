module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Ajoute ce chemin pour analyser tous les fichiers React
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#2563EB', // Bleu moyen
          orange: '#F97316', // Orange vif
        },
        neutral: {
          light: '#F9FAFB', // Gris clair
          dark: '#1F2937', // Noir charbon
        },
      },
    },
  },
  plugins: [],
}




