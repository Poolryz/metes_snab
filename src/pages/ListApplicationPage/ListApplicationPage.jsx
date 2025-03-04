import { List, ListItem, Card, CardContent, Typography, CardActions, Button } from '@mui/material'

export default function ListApplicationPage ({ data }) {
  return (
    <List>
      {data.map(item => {
        return (
          <Card key={item.id} sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography
                gutterBottom
                sx={{ color: 'text.secondary', fontSize: 14 }}
              >
                Word of the Day
              </Typography>
              <Typography variant='h5' component='div'>
                benevolent
              </Typography>
              <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
                adjective
              </Typography>
              <Typography variant='body2'>
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size='small'>Learn More</Button>
            </CardActions>
            <ListItem >
              Название заявки: {item.title} <br />
              id: {item.id} <br />
              Ответственный: {item.responsible} <br />
              Статус: {item.status}
            </ListItem>
          </Card>
        )
      })}
    </List>
  )
}
