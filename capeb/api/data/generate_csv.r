data = read.csv('CAPEBPaysDelaLoire_2014-2017.csv', header=TRUE, sep=";", encoding ="UTF-8")
attach(data)
data$Code.postal

getAttYear <- function(y, l_atr){
  l_atr = c(l_atr, "X..Date")
  return(subset(data, X..Date == y, select = l_atr))
}

data$X..Date = as.numeric(substring(data$X..Date, 7, 10))
annee = unique(data$X..Date)
annee
table(data$Développement.durable)

DD = table(subset(data, data$X..Date == 2016,select = c("intercommunalite.2017_EPCI", "Développement.durable")))
colnames(DD)[1] = "Pas de réponse"
DD
write.csv(file="Développement_durable2016.csv",x=DD)
data$Inter
data$Marchés.publics

MP = table(subset(data, data$X..Date == 2017,select = c("intercommunalite.2017_EPCI","Marchés.publics")))
colnames(MP)[1] = "Pas de réponse"
MP
write.csv(file="Marchés_publics2017.csv",x=MP)

data$Zone.intervention
ZI = aggregate( Zone.intervention ~ intercommunalite.2017_EPCI, getAttYear(2017, c("intercommunalite.2017_EPCI", "Zone.intervention")), mean)
ZI[,1] = as.numeric(ZI[,1])
ZI[,2] = as.numeric(ZI[,2])
zi = matrix(nrow = nrow(ZI), ncol=2)
zi[,1] = as.numeric(ZI[,1])
zi[,2] = as.numeric(ZI[,2])
colnames(zi) = c("Epci", "Zone intervention moyenne")
zi
write.csv(file="Zone_intervention2017.csv",x=ZI,row.names=FALSE, quote = FALSE)

AC = table(subset(data, data$X..Date == 2017,select = c("intercommunalite.2017_EPCI","Activité")))
AC
write.csv(file="Activité2017.csv",x=AC,quote = FALSE)

