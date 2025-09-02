// libraries setup

const express = require('express');
const { Telegraf, Markup } = require('telegraf');
const axios = require('axios');
const cron = require('node-cron');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const BOT_TOKEN = process.env.BOT_TOKEN;

const bot = new Telegraf(BOT_TOKEN);

// body

// commands 

bot.start((ctx) => {
  const welcomeMessage = 
  `     hello in the SCho bot\n
   that provides the books and files\n
   for the national olympiad in chemistry\n
   \n
   /start : to start\n
   \n
   \n
   \n
   thanks for the developer George Tomeh\n
                @GeorgeTomeh\n
   \n
   \n
                Good Luck !\n`;

  ctx.replyWithMarkdown(welcomeMessage, Markup.keyboard([
    ['International', 'National'],
    ['Info']
  ]).resize());
});

bot.help((ctx) => {
  ctx.replyWithMarkdown('bot for SChO books');
});

// actions

bot.action('regions', (ctx) => {
  ctx.editMessageText('Choose:', Markup.inlineKeyboard([
    [Markup.button.callback('books', 'regions_books')],
    [Markup.button.callback('exams', 'regions_exams')]
  ]));
});

bot.action('regions_books', (ctx) => {
  ctx.editMessageText('Choose a category:', Markup.inlineKeyboard([
    [Markup.button.callback('Physical Chemistry', 'physical_chemistry')],
    [Markup.button.callback('General Chemistry', 'general_chemistry')],
    [Markup.button.callback('Analytical Chemistry', 'analytical_chemistry')],
    [Markup.button.callback('Organic Chemistry', 'organic_chemistry')],
    [Markup.button.callback('Inorganic Chemistry', 'inorganic_chemistry')],
    [Markup.button.callback('رجوع', 'regions')]
  ]));
});

bot.action('physical_chemistry', (ctx) => {
  ctx.editMessageText('Choose a book:', Markup.inlineKeyboard([
    [Markup.button.callback('أكسدة و إرجاع', 'nrp1')],
    [Markup.button.callback('كهروكيميائية', 'nrp2')],
    [Markup.button.callback('ترموديناميك', 'nrp3')],
    [Markup.button.callback('رجوع', 'regions_books')]
  ]));
});

bot.action('nrp1', async (ctx) => {
    try {
        const filePath = path.join(__dirname, 'books/الأكسدة_و_الإرجاع.pdf');
        
        if (!fs.existsSync(filePath)) {
            return ctx.reply('File not found!');
        }
        
        await ctx.replyWithDocument({
            source: filePath
        }, {
            caption: 'Here is your PDF file 📄'
        });
        
        await ctx.answerCbQuery();

    } catch (error) {
        console.error('Error sending file:', error);
        await ctx.reply('Sorry, there was an error sending the file.');
        await ctx.answerCbQuery();
    }
});

bot.action('nrp2', async (ctx) => {
    try {
        const filePath = path.join(__dirname, 'books/شرح_مبدأ_الخلايا_الكهروكيميائية.pdf');
        
        if (!fs.existsSync(filePath)) {
            return ctx.reply('File not found!');
        }
        
        await ctx.replyWithDocument({
            source: filePath
        }, {
            caption: 'Here is your PDF file 📄'
        });
        
        await ctx.answerCbQuery();

    } catch (error) {
        console.error('Error sending file:', error);
        await ctx.reply('Sorry, there was an error sending the file.');
        await ctx.answerCbQuery();
    }
});

bot.action('nrp3', async (ctx) => {
    try {
        const filePath = path.join(__dirname, 'books/الناشئ في الترموديناميك.pdf');
        
        if (!fs.existsSync(filePath)) {
            return ctx.reply('File not found!');
        }
        
        await ctx.replyWithDocument({
            source: filePath
        }, {
            caption: 'Here is your PDF file 📄'
        });
        
        await ctx.answerCbQuery();

    } catch (error) {
        console.error('Error sending file:', error);
        await ctx.reply('Sorry, there was an error sending the file.');
        await ctx.answerCbQuery();
    }
});

bot.action('general_chemistry', (ctx) => {
  ctx.editMessageText('Choose a book:', Markup.inlineKeyboard([
    [Markup.button.callback('هندسية ', 'nrg1')],
    [Markup.button.callback('غازات', 'nrg2')],
    [Markup.button.callback('...', 'nrg3')],
    [Markup.button.callback('رجوع', 'regions_books')]
  ]));
});

bot.action('nrg1', async (ctx) => {
    try {
        const filePath = path.join(__dirname, 'books/مدخل إلى الكيمياء الهندسية.pdf');
        
        if (!fs.existsSync(filePath)) {
            return ctx.reply('File not found!');
        }
        
        await ctx.replyWithDocument({
            source: filePath
        }, {
            caption: 'Here is your PDF file 📄'
        });
        
        await ctx.answerCbQuery();

    } catch (error) {
        console.error('Error sending file:', error);
        await ctx.reply('Sorry, there was an error sending the file.');
        await ctx.answerCbQuery();
    }
});

bot.action('nrg2', async (ctx) => {
    try {
        const filePath = path.join(__dirname, 'books/دليل_الغازات.pdf');
        
        if (!fs.existsSync(filePath)) {
            return ctx.reply('File not found!');
        }
        
        await ctx.replyWithDocument({
            source: filePath
        }, {
            caption: 'Here is your PDF file 📄'
        });
        
        await ctx.answerCbQuery();

    } catch (error) {
        console.error('Error sending file:', error);
        await ctx.reply('Sorry, there was an error sending the file.');
        await ctx.answerCbQuery();
    }
});

bot.action('nrg3', async (ctx) => {
  ctx.reply('Soon ...');
});

bot.action('analytical_chemistry', (ctx) => {
  ctx.editMessageText('Choose a book:', Markup.inlineKeyboard([
    [Markup.button.callback('تحليلية', 'nra1')],
    [Markup.button.callback('رجوع', 'regions_books')]
  ]));
});

bot.action('nra1', async (ctx) => {
    try {
        const filePath = path.join(__dirname, 'books/الناشئ في الكيمياء التحليلية.pdf');
        
        if (!fs.existsSync(filePath)) {
            return ctx.reply('File not found!');
        }
        
        await ctx.replyWithDocument({
            source: filePath
        }, {
            caption: 'Here is your PDF file 📄'
        });
        
        await ctx.answerCbQuery();

    } catch (error) {
        console.error('Error sending file:', error);
        await ctx.reply('Sorry, there was an error sending the file.');
        await ctx.answerCbQuery();
    }
});

bot.action('organic_chemistry', (ctx) => {
  ctx.editMessageText('Choose a book:', Markup.inlineKeyboard([
    [Markup.button.callback('عضوية', 'nro1')],
    [Markup.button.callback('رجوع', 'regions_books')]
  ]));
});

bot.action('nro1', async (ctx) => {
    try {
        const filePath = path.join(__dirname, 'books/مقدمة_في_الكيمياء_العضوية_الطبعة_الأولى_2026.pdf');
        
        if (!fs.existsSync(filePath)) {
            return ctx.reply('File not found!');
        }
        
        await ctx.replyWithDocument({
            source: filePath
        }, {
            caption: 'Here is your PDF file 📄'
        });
        
        await ctx.answerCbQuery();

    } catch (error) {
        console.error('Error sending file:', error);
        await ctx.reply('Sorry, there was an error sending the file.');
        await ctx.answerCbQuery();
    }
});

bot.action('inorganic_chemistry', (ctx) => {
  ctx.editMessageText('Choose a book:', Markup.inlineKeyboard([
    [Markup.button.callback('...', 'nri1')],
    [Markup.button.callback('رجوع', 'regions_books')]
  ]));
});

bot.action('nrg1', async (ctx) => {
  ctx.reply('Soon ...');
});

bot.action('regions_exams', (ctx) => {
  ctx.editMessageText('Choose exams file:', Markup.inlineKeyboard([
    [Markup.button.callback('دورات سابقة طبعة اولى', 'former_exams')],
    [Markup.button.callback('رجوع', 'regions_books')],
    [Markup.button.callback('رجوع', 'regions')]
  ]));
});

bot.action('former_exams', async (ctx) => {
    try {
        const filePath = path.join(__dirname, 'books/دورات سابقة-طبعة أولى-2026.pdf');
        
        if (!fs.existsSync(filePath)) {
            return ctx.reply('File not found!');
        }
        
        await ctx.replyWithDocument({
            source: filePath
        }, {
            caption: 'Here is your PDF file 📄'
        });
        
        await ctx.answerCbQuery();

    } catch (error) {
        console.error('Error sending file:', error);
        await ctx.reply('Sorry, there was an error sending the file.');
        await ctx.answerCbQuery();
    }
});

bot.action('governates', (ctx) => {
  ctx.editMessageText('Soon ...');
});

bot.action('national', (ctx) => {
  ctx.editMessageText('Soon ...');
});

bot.hears('National', (ctx) => {
  ctx.reply('Choose: ', Markup.inlineKeyboard([
    [Markup.button.callback('️Regions', 'regions')],
    [Markup.button.callback('Governates', 'governates')],
    [Markup.button.callback('National', 'national')]
  ]));
});

bot.hears('International', (ctx) => {
  ctx.reply('Soon ...');
});

bot.hears('Info', (ctx) => {
  const infoMessage = 
  `this is the one amd the offic SChO bot\n
   that provides the books and files\n
   for the national olympiad in chemistry\n
   \n
   the books and files are made by the coachs\n
   \n
   \n
   \n
   thanks for the developer George Tomeh\n
                @GeorgeTomeh\n
   \n
   \n
                Good Luck !\n`;

  ctx.reply(infoMessage);
});

// start the bot

async function initializeBot() {
  if (process.env.NODE_ENV === 'production') {
    if (!process.env.WEBHOOK_URL) {
      throw new Error('WEBHOOK_URL environment variable is required for production');
    }
    
    const secretPath = `/telegraf/${bot.secretPathComponent()}`;
    app.use(bot.webhookCallback(secretPath));
    await bot.telegram.setWebhook(`${process.env.WEBHOOK_URL}${secretPath}`);
    console.log('Webhook set successfully');
  } else {
    await bot.launch();
    console.log('Bot launched in polling mode');
  }

  app.listen(PORT, () => {
    console.log(`the SChO bot is running on port ${PORT}`);
  });
}

initializeBot().catch(console.error);

// stop the bot

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));