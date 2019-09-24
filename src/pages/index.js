import React, { useState } from "react"
import {
  AppBar,
  Button,
  Toolbar,
  IconButton,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Snackbar,
} from "@material-ui/core"
import { Menu } from "@material-ui/icons"

export default () => {
  const [open, setOpen] = useState(false)

  const handleClose = () => setOpen(false)
  const handleClick = () => setOpen(true)

  return (
    <div>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <Menu />
          </IconButton>
          <Typography variant="h6">Hello?</Typography>
        </Toolbar>
      </AppBar>
      <Card style={{ marginTop: 20 }}>
        <CardActionArea>
          <CardMedia
            image="/bacon.jpg"
            title="BACON."
            style={{ height: 300 }}
          />
          <CardContent>
            <Typography component="p">
              Spicy jalapeno bacon ipsum dolor amet strip steak.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button variant="small" onClick={handleClick}>
            Gimme Bacon
          </Button>
        </CardActions>
      </Card>
      <Card style={{ marginTop: 20 }}>
        <CardActionArea>
          <CardMedia
            image="/bacon.jpg"
            title="BACON."
            style={{ height: 300 }}
          />
          <CardContent>
            <Typography component="p">
              Spicy jalapeno bacon ipsum dolor amet strip steak.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button variant="small" onClick={handleClick}>
            MOAR Bacon
          </Button>
        </CardActions>
      </Card>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        onClose={handleClose}
        ContentProps={{
          "aria-describedby": "message-id",
        }}
        message={<span id="message-id">I love bacon</span>}
      />
    </div>
  )
}
