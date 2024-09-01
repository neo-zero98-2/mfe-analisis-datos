import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

const navItems = [
  {
    titulo: "Acerca",
    link: "/about"
  },
];

export const NavBar = () => {
  const navigate = useNavigate();

  const handleNavigate = (link: string) => {
    navigate(link);
  }

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            // onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Diplomado
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button 
                key={item.titulo} variant="outlined"
                onClick={() => handleNavigate(item.link)}>
                {item.titulo}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      </Box>
  )
}
