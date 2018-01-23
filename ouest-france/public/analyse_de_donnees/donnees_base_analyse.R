setwd("C:/Users/BOUILLETEAU/Documents/Hyblab/HyblabDDJ2018/ouest-france/public/")

#ouverture du fichier de donnees
data.hellfest <- read.csv("data/HellfestDataBasic.csv",sep=";",header=T)
#modification des noms
colnames(data.hellfest) <- c("Nom","Pays","Date_debut","Date_fin","Ville","Nombre","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017")

#transformer les ? et les 0 de la variables "pays" en NA
data.hellfest[data.hellfest$Pays == "0",2] <- NA

table(data.hellfest$"2006")

#correction du data.hellfest
data.hellfest[data.hellfest$Nom == "Black Cobra","2012"] <- 0

artists.hellfest <- data.hellfest[,1:3]

transform <- function(data)
{
  date <- NULL
  scene <- NULL
  groupe <- NULL
  Nbligne <- nrow(data)
  Nbcol <- ncol(data)
  n <- 1 #nombre de lignes dans le data.frame final
  for(c in 4:Nbcol)
  {
    for(l in 1:Nbligne)
    {
      if(data[l,c]!=0)
      {
        date[n] <- names(data.hellfest)[c]
        scene[n] <- as.character(data[l,c])
        groupe[n] <- as.character(data.hellfest[l,1])
        n <- n+1
      }
    }
  }
  R <- data.frame(date,scene,groupe)
  return(R)
}

artists.stages.hellfest <- transform(data.hellfest)

#correction des donnees
artists.stages.hellfest$scene <- gsub("\n"," ",artists.stages.hellfest$scene)
artists.stages.hellfest[artists.stages.hellfest$scene == "Valley, *aka* For Squirrels",2] <- "Valley"
artists.stages.hellfest$scene <- gsub("Metalcorner", "Metal Corner", artists.stages.hellfest$scene)
artists.stages.hellfest[artists.stages.hellfest$groupe == "Sofy Major",2] <- "Valley"
listesHardNHeavy <- grep("^Hard[[:alpha:]]*", artists.stages.hellfest$scene)
artists.stages.hellfest$scene[listesHardNHeavy] <- rep("Hard 'n Heavy",length(listesHardNHeavy))

table(artists.stages.hellfest$scene)


plot(table(artists.stages.hellfest$date))
sort(artists.hellfest$Nombre)

#ecriture des fichiers
write.table(artists.hellfest,"data/artistsHellfest.csv",sep=";",row.names = FALSE)
write.table(artists.stages.hellfest,"data/artistsStagesHellfest.csv",sep=";",row.names = FALSE)
