// seedCities.js

const { Client } = require('@notionhq/client');
const dotenv = require('dotenv');
const municipios = require('./municipios.json'); // Atualize com o caminho correto para o seu arquivo JSON

dotenv.config();

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_DATABASE_ID;

// Função para adicionar uma cidade ao banco de dados Notion
async function addCityToDatabase(notion, databaseId, cidade, estado, latitude, longitude) {
    try {
        const response = await notion.pages.create({
            parent: { database_id: databaseId },
            properties: {
                'Cidade': {
                    title: [
                        {
                            text: {
                                content: cidade,
                            },
                        },
                    ],
                },
                'Estado': {
                    title: [
                        {
                            text: {
                                content: estado,
                            },
                        },
                    ],
                },
                'Latitude': {
                    number: latitude
                },
                'Longitude': {
                    number: longitude
                }
            }    
        });
        console.log(`Cidade ${cidade} adicionada com sucesso:`, response.id);
    } catch (error) {
        console.error(`Erro ao adicionar a cidade ${cidade}:`, error.message);
    }
}

// Função para popular o banco de dados com as cidades
async function seedCities() {
    for (const municipio of municipios) {
        const cidade = municipio.nome;
        const estado = municipio.codigo_uf; // Aqui você deve colocar a sigla do estado
        const latitude = municipio.latitude;
        const longitude = municipio.longitude;

        await addCityToDatabase(notion, databaseId, cidade, estado, latitude, longitude);
    }
    console.log('Seed completo.');
}

// Executar o seed
seedCities().catch(console.error);
