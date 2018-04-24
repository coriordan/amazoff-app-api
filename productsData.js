import productModel from './models/productModel';

/* eslint-disable */
const products = [
  {
    title: '100 Things Every Designer Needs to Know About People',
    description: 'We design to elicit responses from people. We want them to buy something, read more, or take action of some kind. Designing without understanding what makes people act the way they do is like exploring a new city without a map: results will be haphazard, confusing, and inefficient. This book combines real science and research with practical examples to deliver a guide every designer needs. With it you\u2019ll be able to design more intuitive and engaging work for print, websites, applications, and products that matches the way people think, work, and play.',
    authors: [
      'Susan Weinschenk',
    ],
    type: 'book',
    published: '2014-04-14',
    imageUrl: '/products/books/images/1.jpg',
    variants: [
      {
        format: 'Kindle',
        price: {
          currency: 'EUR',
          amount: 7.99,
        },
      },
      {
        format: 'Paperback',
        price: {
          currency: 'EUR',
          amount: 22.95,
        },
      },
    ],
  },
  {
    title: 'Envisioning Information',
    description: 'This book celebrates escapes from the flatlands of both paper and computer screen, showing superb displays of high-dimensional complex data. The most design-oriented of Edward Tufte\'s books, Envisioning Information shows maps, charts, scientific presentations, diagrams, computer interfaces, statistical graphics and tables, stereo photographs, guidebooks, courtroom exhibits, timetables, use of color, a pop-up, and many other wonderful displays of information. The book provides practical advice about how to explain complex material by visual means, with extraordinary examples to illustrate the fundamental principles of information displays. Topics include escaping flatland, color and information, micro\/macro designs, layering and separation, small multiples, and narratives. Winner of 17 awards for design and content. 400 illustrations with exquisite 6- to 12-color printing throughout. Highest quality design and production.',
    authors: [
      'Edward R. Tufte',
    ],
    type: 'book',
    published: '1990-01-01',
    imageUrl: '/products/books/images/2.jpg',
    variants: [
      {
        format: 'Hardcover',
        price: {
          currency: 'EUR',
          amount: 24.99,
        },
      },
      {
        format: 'Paperback',
        price: {
          currency: 'EUR',
          amount: 34.96,
        },
      },
    ],
  },
  {
    title: 'About Face: The Essentials of Interaction Design',
    description: 'About Face: The Essentials of Interaction Design, Fourth Edition is the latest update to the book that shaped and evolved the landscape of interaction design. This comprehensive guide takes the worldwide shift to smartphones and tablets into account.  New information includes discussions on mobile apps, touch interfaces, screen size considerations, and more. The new full\u2013color interior and unique layout better illustrate modern design concepts. \r\n\r\nThe interaction design profession is blooming with the success of design\u2013intensive companies, priming customers to expect "design" as a critical ingredient of marketplace success. Consumers have little tolerance for websites, apps, and devices that don\u2032t live up to their expectations, and the responding shift in business philosophy has become widespread. About Face is the book that brought interaction design out of the research labs and into the everyday lexicon, and the updated Fourth Edition continues to lead the way with ideas and methods relevant to today\u2032s design practitioners and developers.\r\n\r\nUpdated information includes:\r\n\r\n    Contemporary interface, interaction, and product design methods\r\n    Design for mobile platforms and consumer electronics\r\n    State\u2013of\u2013the\u2013art interface recommendations and up\u2013to\u2013date examples\r\n    Updated Goal\u2013Directed Design methodology\r\n\r\nDesigners and developers looking to remain relevant through the current shift in consumer technology habits will find About Face to be a comprehensive, essential resource.',
    authors: [
      'Alan Cooper',
      'Robert Reimann',
      'David Cronin',
      'Christopher Noessel',
    ],
    type: 'book',
    published: '2014-09-19',
    imageUrl: '/products/books/images/3.jpg',
    variants: [
      {
        format: 'Kindle',
        price: {
          currency: 'EUR',
          amount: 7.99,
        },
      },
      {
        format: 'Paperback',
        price: {
          currency: 'EUR',
          amount: 36.47,
        },
      },
    ],
  },
  {
    title: 'HTML and CSS: Design and Build Websites',
    description: 'Every day, more and more people want to learn some HTML and CSS. Joining the professional web designers and programmers are new audiences who need to know a little bit of code at work (update a content management system or e\u2013commerce store) and those who want to make their personal blogs more attractive. Many books teaching HTML and CSS are dry and only written for those who want to become programmers, which is why this book takes an entirely new approach.\r\n\r\n    Introduces HTML and CSS in a way that makes them accessible to everyone hobbyists, students, and professionals and it s full\u2013color throughout\r\n    Utilizes information graphics and lifestyle photography to explain the topics in a simple way that is engaging\r\n    Boasts a unique structure that allows you to progress through the chapters from beginning to end or just dip into topics of particular interest at your leisure\r\n\r\nThis educational book is one that you will enjoy picking up, reading, then referring back to. It will make you wish other technical topics were presented in such a simple, attractive and engaging way!',
    authors: [
      'Jon Duckett',
    ],
    type: 'book',
    published: '2011-11-18',
    imageUrl: '/products/books/images/4.jpg',
    variants: [
      {
        format: 'Hardcover',
        price: {
          currency: 'EUR',
          amount: 28.75,
        },
      },
      {
        format: 'Paperback',
        price: {
          currency: 'EUR',
          amount: 20.53,
        },
      },
    ],
  },
  {
    title: 'Rework: Change the Way You Work Forever',
    description: 'Most business books give you the same old advice: Write a business plan, study the competition, seek investors, yadda yadda. If you\'re looking for a book like that, put this one back on the shelf.\r\n\r\nRead it and you\'ll know why plans are actually harmful, why you don\'t need outside investors, and why you\'re better off ignoring the competition. The truth is, you need less than you think. You don\'t need to be a workaholic. You don\'t need to staff up. You don\'t need to waste time on paperwork or meetings. You don\'t even need an office. Those are all just excuses.\r\n\r\nWhat you really need to do is stop talking and start working. This book shows you the way. You\'ll learn how to be more productive, how to get exposure without breaking the bank, and tons more counterintuitive ideas that will inspire and provoke you.\r\n\r\nWith its straightforward language and easy-is-better approach, Rework is the perfect playbook for anyone who\'s ever dreamed of doing it on their own. Hardcore entrepreneurs, small-business owners, people stuck in day jobs they hate, victims of "downsizing," and artists who don\'t want to starve anymore will all find valuable guidance in these pages.',
    authors: [
      'David Heinemeier Hansson', 'Jason Fried',
    ],
    type: 'book',
    published: '2010-03-18',
    imageUrl: '/products/books/images/5.jpg',
    variants: [
      {
        format: 'Kindle',
        price: {
          currency: 'EUR',
          amount: 7.99,
        },
      },
      {
        format: 'Hardcover',
        price: {
          currency: 'EUR',
          amount: 22.18,
        },
      },
      {
        format: 'Paperback',
        price: {
          currency: 'EUR',
          amount: 17.68,
        },
      },
    ],
  },
  {
    title: 'Remote: Office Not Required',
    description: 'For too long our lives have been dominated by the \u2018under one roof\u2019 Industrial Revolution model of work. That era is now over. There is no longer a reason for the daily roll call, of the need to be seen with your butt on your seat in the office. The technology to work remotely and to avoid the daily grind of commuting and meetings has finally come of age, and bestselling authors Jason Fried and David Heinemeier Hansson are the masters of making it work at tech company 37signals. Remote working is the future \u2013 and it is rushing towards us.\r\n\r\nRemote: Office Not Required combines eye-opening ideas with entertaining narrative. It will convince you that working remotely increases productivity and innovation, and it will also teach you how to get it right \u2013 whether you are a manager, working solo or one of a team. Chapters include: \u2018Talent isn\u2019t bound by the hubs\u2019, \u2018It\u2019s the technology, stupid\u2019, \u2018When to type, when to talk\u2019, \u2018Stop managing the chairs\u2019 and \u2018The virtual water cooler\u2019.\r\n\r\nBrilliantly simple and refreshingly illuminating this is a call to action to end the tyranny of being shackled to the office.',
    authors: [
      'Jason Fried', 'David Heinemeier Hansson',
    ],
    type: 'book',
    published: '2013-10-29',
    imageUrl: '/products/books/images/6.jpg',
    variants: [
      {
        format: 'Kindle',
        price: {
          currency: 'EUR',
          amount: 7.99,
        },
      },
      {
        format: 'Hardcover',
        price: {
          currency: 'EUR',
          amount: 20.99,
        },
      },
      {
        format: 'Paperback',
        price: {
          currency: 'EUR',
          amount: 15.59,
        },
      },
    ],
  },
  {
    title: 'Beautiful Evidence',
    description: 'Science and art have in common intense seeing, the wide-eyed observing that generates visual information. Beautiful Evidence is about how seeing turns into showing, how data and evidence turn into explanation. The book identifies excellent and effective methods for showing nearly every kind of information, suggests many new designs (including sparklines), and provides analytical tools for assessing the credibility of evidence presentations (which are seen from both sides: how to produce and how to consume presentations). For alert consumers of presentations, there are chapters on diagnosing evidence corruption and PowerPoint pitches. Beautiful Evidence concludes with 2 chapters that leave the world of pixel and paper flatland representations - and move onto seeing and thinking in space land, the real-land of three-space and time.',
    authors: [
      'Edward R. Tufte',
    ],
    type: 'book',
    published: '2006-07-01',
    imageUrl: '/products/books/images/7.jpg',
    variants: [
      {
        format: 'Hardcover',
        price: {
          currency: 'EUR',
          amount: 40.99,
        },
      },
      {
        format: 'Paperback',
        price: {
          currency: 'EUR',
          amount: 28.87,
        },
      },
    ],
  },
  {
    title: 'Hooked: How to Build Habit-Forming Products',
    description: 'Why do some products capture our attention while others flop? What makes us engage with certain things out of sheer habit? Is there an underlying pattern to how technologies hook us?\r\n\r\nNir Eyal answers these questions (and many more) with the Hook Model - a four-step process that, when embedded into products, subtly encourages customer behaviour. Through consecutive "hook cycles," these products bring people back again and again without depending on costly advertising or aggressive messaging.\r\n\r\nHooked is based on Eyal\'s years of research, consulting, and practical experience. He wrote the book he wished had been available to him as a start-up founder - not abstract theory, but a how-to guide for building better products. Hooked is written for product managers, designers, marketers, start-up founders, and anyone who seeks to understand how products influence our behaviour.',
    authors: [
      'Nir Eyal',
    ],
    type: 'book',
    published: '2014-01-01',
    imageUrl: '/products/books/images/8.jpg',
    variants: [
      {
        format: 'Hardcover',
        price: {
          currency: 'EUR',
          amount: 40.99,
        },
      },
      {
        format: 'Paperback',
        price: {
          currency: 'EUR',
          amount: 18.56,
        },
      },
    ],
  },
  {
    title: 'A Practical Guide to Designing for the Web',
    description: 'A Practical Guide to Designing for the Web aims to teach you techniques for designing your website using the principles of graphic design. Featuring five sections, each covering a core aspect of graphic design: Getting Started, Research, Typography, Colour, and Layout. Learn solid graphic design theory that you can simply apply to your designs, making the difference from a good design to a great one.',
    authors: [
      'Mark Boulton',
    ],
    type: 'book',
    published: '2009-01-01',
    imageUrl: '/products/books/images/9.jpg',
    variants: [
      {
        format: 'Kindle',
        price: {
          currency: 'EUR',
          amount: 7.99,
        },
      },
      {
        format: 'Paperback',
        price: {
          currency: 'EUR',
          amount: 31.90,
        },
      },
    ],
  },
  {
    title: 'Thinking with Type',
    description: 'Our all time best selling book is now available in a revised and expanded second edition. Thinking with Type is the definitive guide to using typography in visual communication, from the printed page to the computer screen. This revised edition includes forty-eight pages of new content, including the latest information on style sheets for print and the web, the use of ornaments and captions, lining and non-lining numerals, the use of small caps and enlarged capitals, as well as information on captions, font licensing, mixing typefaces, and hand lettering. Throughout the book, visual examples show how to be inventive within systems of typographic form\u2014what the rules are and how to break them. Thinking with Type is a type book for everyone: designers, writers, editors, students, and anyone else who works with words. The popular online companion to Thinking with Type (www.thinkingwithtype.com) has been revised to reflect the new material in the second edition.',
    authors: [
      'Ellen Lupton',
    ],
    type: 'books',
    published: '2008-02-11',
    imageUrl: '/products/books/images/10.jpg',
    variants: [
      {
        format: 'Kindle',
        price: {
          currency: 'EUR',
          amount: 7.99,
        },
      },
      {
        format: 'Paperback',
        price: {
          currency: 'EUR',
          amount: 27.25,
        },
      },
    ],
  },
  {
    title: 'Mastering Regular Expressions',
    description: 'Regular expressions are an extremely powerful tool for manipulating text and data. They are now standard features in a wide range of languages and popular tools, including Perl, Python, Ruby, Java, VB.NET and C# (and any language using the .NET Framework), PHP, and MySQL.\r\n\r\nIf you don\'t use regular expressions yet, you will discover in this book a whole new world of mastery over your data. If you already use them, you\'ll appreciate this book\'s unprecedented detail and breadth of coverage. If you think you know all you need to know about regularexpressions, this book is a stunning eye-opener.\r\n\r\nAs this book shows, a command of regular expressions is an invaluable skill. Regular expressions allow you to code complex and subtle text processing that you never imagined could be automated. Regular expressions can save you time and aggravation. They can be used to craft elegant solutions to a wide range of problems. Once you\'ve mastered regular expressions, they\'ll become an invaluable part of your toolkit. You will wonder how you ever got by without them.\r\n\r\nYet despite their wide availability, flexibility, and unparalleled power, regular expressions are frequently underutilized. Yet what is power in the hands of an expert can be fraught with peril for the unwary. Mastering Regular Expressions will help you navigate the minefield to becoming an expert and help you optimize your use of regular expressions. ',
    authors: [
      'Jeffrey E.F. Friedl',
    ],
    type: 'book',
    published: '2006-06-02',
    imageUrl: '/products/books/images/11.jpg',
    variants: [
      {
        format: 'Kindle',
        price: {
          currency: 'EUR',
          amount: 7.99,
        },
      },
      {
        format: 'Paperback',
        price: {
          currency: 'EUR',
          amount: 24.90,
        },
      },
    ],
  },
  {
    title: 'Design Patterns in Ruby',
    description: 'Most design pattern books are based on C++ and Java. But Ruby is different\u2014and the language\'s unique qualities make design patterns easier to implement and use. In this book, Russ Olsen demonstrates how to combine Ruby\'s power and elegance with patterns, and write more sophisticated, effective software with far fewer lines of code.\r\n\r\nAfter reviewing the history, concepts, and goals of design patterns, Olsen offers a quick tour of the Ruby language\u2014enough to allow any experienced software developer to immediately utilize patterns with Ruby. The book especially calls attention to Ruby features that simplify the use of patterns, including dynamic typing, code closures, and "mixins" for easier code reuse.\r\n\r\nFourteen of the classic "Gang of Four" patterns are considered from the Ruby point of view, explaining what problems each pattern solves, discussing whether traditional implementations make sense in the Ruby environment, and introducing Ruby-specific improvements. You\'ll discover opportunities to implement patterns in just one or two lines of code, instead of the endlessly repeated boilerplate that conventional languages often require.\r\n\r\nDesign Patterns in Ruby also identifies innovative new patterns that have emerged from the Ruby community. These include ways to create custom objects with metaprogramming, as well as the ambitious Rails-based "Convention Over Configuration" pattern, designed to help integrate entire applications and frameworks.',
    authors: [
      'Russ Olsen',
    ],
    type: 'book',
    published: '2008-06-02',
    imageUrl: '/products/books/images/12.jpg',
    variants: [
      {
        format: 'Kindle',
        price: {
          currency: 'EUR',
          amount: 7.99,
        },
      },
      {
        format: 'Paperback',
        price: {
          currency: 'EUR',
          amount: 21.80,
        },
      },
    ],
  },
];
/* eslint-disable */

export const loadProducts = () => {
  productModel.find({}).remove(() => {
    productModel.insertMany(products, (err, docs) => {
      if (err) {
        console.log('failed to load Product data.');
      } else {
        console.info(`${products.length} products were successfully stored.`);
      }
    });
  });
};
