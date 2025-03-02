import { List, ListItem } from "@mui/material";

export default function ListApplicationPage({data}){

    

    return(
        <List>
            {data.map((item)=>{
                return(
                    <ListItem key={item.id}>
                        Название заявки: {item.title} <br />
                        id: {item.id} <br />
                        Ответственный: {item.responsible} <br />
                        Статус: {item.status}
                    </ListItem>
                )
            })}
        </List>
    )
}