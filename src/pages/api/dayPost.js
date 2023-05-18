export default function handler(req, res) {
    if (req.method === 'POST') {
        const {day} = req.body
        res.redirect(`/day/${day}`)
      }
  }
  