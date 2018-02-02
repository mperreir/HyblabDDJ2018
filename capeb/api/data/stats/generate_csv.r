data = read.csv('../raw/CAPEBPaysDelaLoire_2014-2017.csv', header=TRUE, sep=";", encoding ="UTF-8")
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

#write.csv(file="Développement_durable2016.csv",x=DD,quote = FALSE,fileEncoding ="UTF-8")

data$Inter
data$Marchés.publics

MP = table(subset(data, data$X..Date == 2017,select = c("intercommunalite.2017_EPCI","Marchés.publics")))
colnames(MP)[1] = "Pas de réponse"
MP

#write.csv(file="Marchés_publics2017.csv",x=MP, quote = FALSE,fileEncoding ="UTF-8")

data$Zone.intervention
ZI = aggregate( Zone.intervention ~ intercommunalite.2017_EPCI, getAttYear(2017, c("intercommunalite.2017_EPCI", "Zone.intervention")), mean)
ZI[,1] = as.numeric(ZI[,1])
ZI[,2] = as.numeric(ZI[,2])
zi = matrix(nrow = nrow(ZI), ncol=2)
zi[,1] = as.numeric(ZI[,1])
zi[,2] = as.numeric(ZI[,2])
colnames(zi) = c("Epci", "Zone intervention moyenne")
zi
#write.csv(file="Zone_intervention2017.csv",x=ZI,row.names=FALSE, quote = FALSE,fileEncoding ="UTF-8")

AC = table(subset(data, data$X..Date == 2017,select = c("intercommunalite.2017_EPCI","Activité")))
AC
#write.csv(file="Activité2017.csv",x=AC,quote = FALSE,fileEncoding ="UTF-8")

data$intercommunalite.2017_EPCI

contrats = aggregate( cbind(CDD,CDI,Apprentis,Intérimaires) ~ intercommunalite.2017_EPCI + X..Date,subset(data,select = c("intercommunalite.2017_EPCI", "X..Date","CDD", "CDI")), FUN=sum)
write.csv(file="Contrats_2014-2017.csv",x=contrats,row.names=FALSE, quote = FALSE,fileEncoding ="UTF-8")

data$CA.réalisé

AC = table(subset(data,select = c("intercommunalite.2017_EPCI","X..Date","CA.réalisé")))
AC

#write.csv(file="CA_2014-2017.csv",x=AC, quote = FALSE,fileEncoding ="UTF-8")

data$CA.Batiments.neufs + data$CA.Logements.neufs

epcis = unique(data$intercommunalite.2017_EPCI)
acts = unique(data$Activité)
acts
Bneufs = unique(data$CA.Batiments.neufs)
Lneufs = unique(data$CA.Logements.neufs)
evo_car = unique(data$Evolution.Carnet.de.commandes)
data$CA.Réhabilitation.entretien

evo_car = c('A la baiss', 'A la hausse', 'Stable')
cols = c('EPCI', 'Activité', 'Freq', 'Marché Principale', 'Freq', 'Evolution.Carnet.de.commandes' , 'Freq', 'Contrat', 'Moyenne')
length(cols)

sunburst = matrix(nrow = 0, ncol = 3)

subset(data, X..Date=2017,select = c("intercommunalite.2017_EPCI","X..Date","CA.réalisé"))
colnames(sunburst) = c('ecpi', 'chemin', 'count')

type_mp = c('CA.Logements.neufs', 'CA.Batiments.neufs', 'CA.Réhabilitation.entretien')

contrats = c('CDD', 'CDI', 'Apprentis', 'Intérimaires')

sl = c('intercommunalite.2017_EPCI', 'Activité', type_mp, 'Evolution.Carnet.de.commandes', 'CDI', 'CDD', 'Apprentis', 'Intérimaires')
epcis
for(epci in epcis){
  epci_set = subset(data, intercommunalite.2017_EPCI==epci, select=sl)
  
  for(act in acts){
    act_set = subset(epci_set, Activité == act, select=sl)

    mp_neuf_bat = subset(act_set, CA.Batiments.neufs > CA.Réhabilitation.entretien && CA.Batiments.neufs > CA.Logements.neufs, select=sl[6:10])
    mp_neuf_log = subset(act_set, CA.Logements.neufs > CA.Batiments.neufs && CA.Logements.neufs > CA.Réhabilitation.entretien, select=sl[6:10])
    mp_entretien = subset(act_set, CA.Réhabilitation.entretien >= CA.Logements.neufs && CA.Réhabilitation.entretien >= CA.Batiments.neufs, select=sl[6:10])
    id_mp = 0
    for(mp in list(mp_neuf_bat, mp_neuf_log, mp_entretien)){
      if(nrow(mp) > 0){
        for(car in evo_car){
          car_set = subset(mp, Evolution.Carnet.de.commandes == car, select=sl[7:10])
          if(nrow(car_set) > 0){
            for(c in contrats){
              eff = car_set[,c]
              
              chemin = c(act, toString(type_mp[id_mp]), car, c)
              #freq = c(nrow(act_set), nrow(mp), nrow(car_set), mean(eff[eff >= 1], na.rm = TRUE))
              
              row = c(epci, paste(chemin,collapse="&"), mean(eff[eff >= 1], na.rm = TRUE))
              #row = c(epci, act, , toString(type_mp[id_mp]), , car, , c, )
              sunburst = rbind(sunburst, row)
            }
          }
        }
      }
      id_mp = id_mp + 1
      
    }
  }
}
eff
chemin
write.csv(file="sunburst.csv",x=sunburst,row.names=FALSE, quote = FALSE,fileEncoding ="UTF-8")
length(car_set)
mean(car_set[,c])

sunburst
mps[2]

mp_neuf_bat
epci
nrow(act_set)
mp_neuf_log
mp
nrow(mp_neuf_bat)
nrow(mp_entretien)

length(mp)
act_set
sl[6:10]
nrow(mp_neuf_bat)
act_set[,'CDD']
mp_neuf_bat[,'Activité']
id_mp
sunburst
colnames(data)
d =subset(data, Evolution.Carnet.de.commandes == 'A la baisse', select=colnames(data))
d$CDD
d[,'CDI']

length(car_set[,'Activité'])
length(mp_neuf_bat)
mp[,'CDD']
d[,'Code.postal']
act
data$CDD
