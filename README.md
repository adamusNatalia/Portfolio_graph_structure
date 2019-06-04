# Graphical representation of the portfolio
Please, clone repository to Visual Studio and open Portfolio structure.sln project. Run application on localhost This is simple web app which display graphical representation of chosen portfolio. To select portfolio's diagram please click on the link on navbar.

Final nodes have different color. To determine colors of nodes json file should have aditional attributes to each node, for example:

{
  "name": "Portfolio 2",
  "level": "yellow",
  "children": []
}. 

I used D3.js library to create the diagram
