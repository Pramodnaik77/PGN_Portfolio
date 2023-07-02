const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '',
  title: 'PGN',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Pramod Ganapati Naik',
  role: 'Full Stack Developer',
  description:
    'Motivated Programmer with exceptional background spent in Competitive Programming and Web development. Quickly mastering new software technologies. Logical and professional with excellent problem-solving skills and good communication skills.',
  resume: 'https://drive.google.com/file/d/1PGv2vzRH90YWFw26lyPRTVTmh_1jWfIb/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/pramod-ganapati-naik-368460244/',
    github: 'https://github.com/Pramodnaik77',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'QuickCart',
    description:
      'QucikCart is a E-Commerce website. This web application helps  user to search for products and add them to a cart and aslo oder the products with secure login and an attractive user interface',
    stack: ['Django', 'Python' ,'HTML', 'CSS', 'JavaScript', 'Mysql'],
    sourceCode: 'https://github.com/Pramodnaik77/Shop_app',
    livePreview: 'https://drive.google.com/file/d/1fP2U7afKM8zfKW89PDDB725oC_ZBNMC9/view?usp=sharing',
  },
  {
    name: 'Expense Tracker',
    description:
      'This web application lets the user track their daily expenses and gives a monthly expense summary. User can limit their expense by adding Max limits and getting a reminder if the expense is crossed the limit. It also has a graphical representation of expenses.',
    stack: ['Django', 'Python' ,'HTML', 'CSS', 'JavaScript','sqlite3'],
    sourceCode: 'https://github.com/Pramodnaik77/Expense_Application'
    // livePreview: '',
  },
  {
    name: 'Web Scraper',
    description:
      'This application is used to collect all articles on the website:https://www.theverge.com/ and store them in a SQLite3 Database with Date, Artist name, and Description.',
    stack: ['Python', 'sqlite3', 'Selenium'],
    sourceCode: 'https://github.com/Pramodnaik77/Web_Scrapping'
    // livePreview: '',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Django',
  'Python',
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'C/C++',
  'Java',
  'Git',
  'MySql',
  'sqlite3'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'pramodnaik8887@gmail.com',
}

export { header, about, projects, skills, contact }
