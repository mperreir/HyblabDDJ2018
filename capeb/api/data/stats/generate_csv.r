data = read.csv('../raw/CAPEBPaysDelaLoire_2014-2017.csv', header=TRUE, sep=";", encoding ="UTF-8")
data2 = read.csv('Marchés_publics2017.csv', header=TRUE, sep=",", encoding ="UTF-8")
attach(data2)
max(Oui, na.rm = T)
min(Oui, na.rm = T)
attach(data)
data$Code.postal
mean(Oui, na.rm = T)
getAttYear <- function(y, l_atr){
  l_atr = c(l_atr, "X..Date")
  return(subset(data, X..Date == y, select = l_atr))
}
d17

conj = matrix(nrow = 0, ncol = 2)
colnames(conj) = c("EPCI", "Conjoncture.calculée")

epcis
for(epci in epcis){
  epci_set = subset(d17, intercommunalite.2017_EPCI==epci)
  conj = rbind(conj, c(epci, mean(epci_set$Conjoncture.calculée, na.rm = T)))
}

write.csv(file="ConjonctureEPCI.csv",x=conj,row.names=FALSE,quote = FALSE,fileEncoding ="UTF-8")

mean(conj[,2], na.rm = T)

epci_set[,0]
conj
data$Conjoncture.calculée

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
#write.csv(file="Contrats_2014-2017.csv",x=contrats,row.names=FALSE, quote = FALSE,fileEncoding ="UTF-8")

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
    #for(mp in list(mp_neuf_bat, mp_neuf_log, mp_entretien)){
      #if(nrow(mp) > 0){
        for(car in evo_car){
          car_set = subset(act_set, Evolution.Carnet.de.commandes == car, select=sl[7:10])
          if(nrow(car_set) > 0){
            for(c in contrats){
              eff = car_set[,c]
              
              chemin = c(act, car, c)
              #freq = c(nrow(act_set), nrow(mp), nrow(car_set), mean(eff[eff >= 1], na.rm = TRUE))
              
              row = c(epci, paste(chemin,collapse="&"), mean(eff[eff >= 1], na.rm = TRUE))
              #row = c(epci, act, , toString(type_mp[id_mp]), , car, , c, )
              sunburst = rbind(sunburst, row)
            }
          }
        }
      #}
      #id_mp = id_mp + 1
      
    #}
  }
}
sunburst
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




#stat de la region 
#conjoncture
#investisement
#zone intervention
#Marche public 

stat_region = matrix(nrow = 0, ncol = 4)
colnames(stat_region) = c('Conjoncture.calculée.Moy', 'Investissement.Moy.Oui', 'Zone.intervention.Moy', 'Marchés.publics.Max')

cc = mean(data$Conjoncture.calculée, na.rm=T)
im = table(data$Investissement)[-1]
im = unname(im/sum(im))
 

dm = mean(data$Zone.intervention, na.rm =T)
mp = table(data$Marchés.publics)[-1]
mp
mp = unname(mp/sum(mp))
mp
stat_region = rbind(c(cc, im[2], dm, mp[2]),stat_region)

write.csv(file="stats_region.csv",x=stat_region,row.names=FALSE, quote = FALSE,fileEncoding ="UTF-8")

sum(sum(data$Zone.intervention - mean(data$Zone.intervention, na.rm = T))^2)

conj = aggregate(Conjoncture.calculée ~ intercommunalite.2017_EPCI,subset(data,select = c("intercommunalite.2017_EPCI", "Conjoncture.calculée")), FUN=mean)

contrats



table(data$Sujets.intérêt)[-1] + table(data$Sujets.intérêt_1)[-1]
table(data[,316])

m = c()
table(data[307,])
colnames(data)

for(i in 307:316){
  for(d in getAttYear(2017, colnames(data))[,i]){
    m = c(d, m)
  }  
}
reps = unique(m)
reps = rep[-1]
rep

dd = matrix(nrow = 0, ncol = 3)
colnames(dd) = c("epci", "Aspects", "Count")

d17 = getAttYear(2017, colnames(data))
colnames(d17)[307:316]
table(m)

for(epci in epcis){
  sub = subset(d17, intercommunalite.2017_EPCI == epci, select = colnames(d17))
  m = c()
  for(i in 307:316){
    for(d in sub[,i]){
      if(d != ""){
        m = c(d, m)
      }
    }  
  }
  
  tab = table(m)
  tab = (tab/sum(tab)) * 100
  i = 1

  for(v in tab){
    dd = rbind(dd, c(epci, names(tab)[i], tab[i]))
    i = i + 1
  }
  
}
m
dd
tab
m

dd
sub = subset(d17, intercommunalite.2017_EPCI == 200071934, select = colnames(d17))
sub[, 'intercommunalite.2017_EPCI']

m = c()
for(i in 307:316){
  for(d in data[,i]){
    m = c(d, m)
  }  
}
m
names(tab)[1]

data$Suje
dd
colnames(data)[316]

table(data[,315])
dd
write.csv(file="DD_2017.csv",x=dd,row.names=FALSE, quote = FALSE,fileEncoding ="UTF-8")
wirte.csv()

annee
data

annee
epcis = unique(data$intercommunalite.2017_EPCI)
data$X..Date
annee
acts = unique(data$Activité)
act
subset(data, X..Date == 2014)$X..Date
evo_nb = matrix(nrow = 0, ncol=length(acts) + 2)

colnames(evo_nb) = c('epci', 'annee', levels(acts))
for(epci in epcis){
  sepci = subset(data, intercommunalite.2017_EPCI == epci, select = c('X..Date','Activité', 'Nb.recr..envisagés'))
  for(a in annee){
    r = c(epci, a)
    sa = subset(sepci, X..Date == a)    
    for(act in acts){
      sact = subset(sa, Activité == act)
      r = c(r, sum(sact$Nb.recr..envisagés, na.rm = T))
    }
    evo_nb = rbind(evo_nb, r)
  }
  
}
annee
evo_nb
act
row
data$Nb.recr..envisagés
write.csv(file="recrutement_Activité2014_2017.csv",x=evo_nb,row.names=FALSE, quote = FALSE,fileEncoding ="UTF-8")

write.csv(evo_nb)

ids = match(c('Freins.MP', 'Freins.MP_1', 'Freins.MP_2'), colnames(data))

cloud = c()
for(id in ids){
  for(r in data[,id]){
    cloud = c(cloud, r)
  }
}
cloud_e[length(cloud_e) == 0]

words = unique(cloud)
words
cloud_epci = matrix(nrow=0, ncol=3)
colnames(cloud_epci) = c('epci', 'Freins.MP', 'Freq')
for(epci in epcis){
  sub = subset(data, intercommunalite.2017_EPCI == epci, select = c('Freins.MP', 'Freins.MP_1', 'Freins.MP_2'))  
  cloud_e = c()
  for(fr in c('Freins.MP', 'Freins.MP_1', 'Freins.MP_2')){
    for(r in sub[,fr]){
      if(r != ""){
        cloud_e = c(cloud_e, r)
      }
    }
  }
  i = 1
  tab = table(cloud_e)
  #rm_empty = match("", names(tab))
  tab = tab/(sum(tab)) 
  for(f in tab){
    cloud_epci = rbind(cloud_epci, c(epci, names(tab)[i], f))
    
    i = i + 1
    
  }
  
}
length("")
tab
cloud_epci
table(cloud_e)
cloud_e
tab
match(c(""), names(tab))

rm_empty
cloud_epci
write.csv(file="FreinsMP.csv",x=cloud_epci,row.names=FALSE, quote = FALSE,fileEncoding ="UTF-8")
names(tab)[1] = ""
data$Freins.MP_2
cloud = c(data$Freins.MP,data$Freins.MP_1,data$Freins.MP_2)
table(cloud)
data$Investissement

data
data$Difficultés.MP_1
cloud_epci = matrix(nrow=0, ncol=3)
colnames(cloud_epci) = c('epci', 'Difficultés.MP', 'Freq')
for(epci in epcis){
  sub = subset(data, intercommunalite.2017_EPCI == epci, select =c('Difficultés.MP', 'Difficultés.MP_1', 'Difficultés.MP_2'))  
  e = c()
  for(fr in c('Difficultés.MP', 'Difficultés.MP_1', 'Difficultés.MP_2')){
    for(r in sub[,fr]){
        e = c(e, r)
    }
  }
  i = 1
  tab = table(e)
  print(sum(tab/sum(tab)))
  #rm_empty = match("", names(tab))
  for(f in tab){
    cloud_epci = rbind(cloud_epci, c(epci, names(tab)[i], f/sum(tab)))
    i = i + 1
  }
  
}
cloud_e

cloud_epci
length("")
tab
cloud_epci
table(cloud_e)
cloud_e
tab
match(c(""), names(tab))

rm_empty
cloud_epci
write.csv(file="DifficultésMP.csv",x=cloud_epci,row.names=FALSE, quote = FALSE,fileEncoding ="UTF-8")


data$DifficultéDifficultés.MP
aspects = unique(m)
aspects = aspects[3:10]
aspects
match("Interet.Qualité.des.matériaux_2", colnames(data))

aspects = c('Accessibilité', 'Assainissement', 'Déchets', 'Eco.construction', 'EcoEnergie', 'EnR', 'Qualité.de.l.U.0092.air', 'Qualité.de.l.U.0092.eau', 'Qualité.des.matériaux')

interets = matrix(nrow = 0, ncol = 9)

for(asp in aspects){
  merg = c()
  for(pl in c('', '_1', '_2')){
      for(r in data[, paste("Interet.", asp,pl ,sep = "")]){
        merg = c(merg, r)
      }
  }
  interets = cbind(interets, merg)
}
aspects
interts
data$Interet.Qualité.des.matériaux_2
dd_i = matrix(nrow = 0, ncol = 4)
colnames(dd_i) = c('epci', 'aspect', 'interet', 'freq')

d17 = subset(data, X..Date == 2017)  
epcis

for(epci in epcis){
  sub = subset(d17, intercommunalite.2017_EPCI == epci)  
  for(asp in aspects){
    merg = c()
    for(pl in c('', '_1', '_2')){
      for(r in sub[, paste("Interet.", asp, pl ,sep = "")]){
        if(r != ""){
          merg = c(merg, r)
        }
      }
    } 
    tab = table(merg)
    tab = (tab/sum(tab)) * 100
    i = 1
    for(r in tab){
      if(r > 0){
        dd_i = rbind(c(epci, asp, names(tab)[i], r), dd_i)
      }
      i = i + 1
    }
  }
}

write.csv(file="DD_INTERET_2017.csv",x=dd_i,row.names=FALSE, quote = FALSE,fileEncoding ="UTF-8")

dd_i
names(tab)[2] == ""

sub$Code.postal
data[, paste("Interet.", asp, pl ,sep = "")]

names(merg)[0]
pl
tab
colnames(data)[307]
data$De



d17 = subset(data, X..Date == 2014) 

d17$Re
table(d17$Recrutement.envisagé)

rec_env = matrix(nrow = 0, ncol = 3)
colnames(rec_env) = c('Epci', 'Année', 'Oui')

annee
for(epci in epcis){
  sub = subset(data, intercommunalite.2017_EPCI == epci, select = c('X..Date', 'Recrutement.envisagé'))  
  for(a in annee){
    s = subset(sub, X..Date == a, select = c('Recrutement.envisagé'))
    tab = table(s[,1])
    print(tab)
    if(length(tab) >= 3){
      tab = tab[-1]
    }
    tab = tab/sum(tab)
    rec_env = rbind(rec_env, c(epci,a , tab[2] * 100))
  }
}



write.csv(file="EvoRecrutementEnv2014_2017.csv",x=rec_env,row.names=FALSE, quote = FALSE,fileEncoding ="UTF-8")

s
tab
rec_env
tab
sub[,1]

