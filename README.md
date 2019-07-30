# INFOVIS_BreakingBad_Project

This is the final project for the course of **Information Visualization** at *Università degli Studi Roma Tre*. In this project we show a visual representation of the deaths in the TV show ***Breaking Bad***.

**BEWARE SPOILERS! THIS APPLICATION IS MEANT FOR PEOPLE WHO HAVE FULLY WATCHED *BREAKING BAD*.**

We have two data structures:
  - an interactive bar chart;
  - a filterable and sortable table.
  
The bar chart shows the number of deaths in each season. By clicking on a bar, you can see the number of deaths in each episode. The purpose of this chart is giving a quantitative view on the deaths in *Breaking Bad*.

The table shows a more detailed view of the deaths. We have columns for various information like the victim, the murderer, the cause of death. You can sort table by clicking on the column name. You can filter the table by typing on the search bars.

We used : *AngularJS*, *jQuery* and *Highcharts*

In order to launch this application, open the console, go to the directory where the files are located and use the 
command `python -m http.server` (or `python -m SimpleHTTPServer`), then open the browser and go to `localhost:8000` (or `:3000` or whatever is shown on the commandline).
