const express = require("express")
const cors = require("cors")
const router = express.Router()
const nodemailer = require('nodemailer')

const app = express()

app.use(cors({
    origin: "*"
}))

app.use(router)

app.use(express.json())

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');


app.use(express.static(__dirname + '/public'));


let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "ivanserov360@gmail.com",
    pass: "vfvnkohhzvckktwy",
  },
})


router.get("/mail", async (req, res) => {

    let {name, phone, email, city} = req.query
 
    if (name && phone && email) {
      let result = await transporter.sendMail({
        from: 'SoftKids SITE',
        to:  ['softkids@mail.ru', "denpogoda@gmail.com"],
        subject: 'SoftKids SITE ЗАЯВКА',
        html:
          `
          <h1>${name} из города ${city} оставил заявку, его контакты: ${phone}, ${email}</h1>
          `,
      })
    
      console.log(result)
      res.status(200).json()
    }
    else {
      res.status(400).json("Ошибка")
    }

    
  
})

router.get("/cb", async (req, res) => {

  let {n, p, q} = req.query

  console.log(p)
  if (n && p && q) {
    let result = await transporter.sendMail({
      from: 'SoftKids SITE',
      to: ['softkids@mail.ru', "denpogoda@gmail.com"],
      subject: 'SoftKids SITE ОБРАТНЫЙ ЗВОНОК',
      html:
        `
        <h1>${n} просит Вас перезвонить вопрос ${q}, его телефон ${p}</h1>
        `,
    })
    console.log(result)
    res.status(200).json("ok")
  }
  else {
    res.status(400).json('Ошибка')
  }

})




router.get("/", (req, res) => {
  res.status(200).render("./index.html")
})


router.get("/subsidy", (req, res) => {
  console.log(__dirname)
  res.status(200).render("./secondPage.html")
})


app.listen(80, () => {
    console.log(`start on 80 PORT`)
})
