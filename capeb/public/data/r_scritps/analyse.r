data = read.csv('../CAPEBPaysDelaLoire_QUI_OU_FILTRE.csv', header=TRUE, sep=",")

data$CA.réalisé
#date sous format annee
data$X..Date = as.numeric(substring(data$X..Date, 7, 10))

getAttYear <- function(y, l_atr){
  l_atr = c(l_atr, "X..Date")
  return(subset(data, X..Date == y, select = l_atr))
}
annee = unique(data$X..Date)

getAttYear(annee, "Age.CE")
colors = c("#e6194b","#3cb44b","#ffe119","#0082c8","#f58231","#911eb4","#46f0f0","#d49f36","#552095","#507f2d","#db37aa","#84b67c","#a06fda","#df462a","#5b83db","#c76c2d","#4f49a3","#82702d","#dd6bbb","#334c22","#d83979","#55baad","#dc4555","#62aad3","#8c3025","#417d61","#862977","#bba672","#403367","#da8a6d","#a79cd4","#71482c","#c689d0","#6b2940","#d593a7","#895c8b","#bd5975")
colors = palette(rainbow(20))
########################EVOLTION D TYPE DE CONTRAT####################"

recrtmnt = data[,c("X..Date","CDD", "CDI", "Apprentis", "Intérimaires")]

table_rcrt = aggregate(. ~ X..Date, recrtmnt, FUN=sum)
table_rcrt = table_rcrt[,seq(2,5)]

vide_c = c()
for(a in annee){
  vide_c = c(vide_c, sum(as.numeric(getAttYear(a, "Age.CE")$Age.CE == "")))
}

for(i in 1:length(annee)){
  table_rcrt[i,] = table_rcrt[i,]/sum(table_rcrt[i,]) * 100
}

for(i in 1:4){
  plot(annee, table_rcrt[,i], type = "l", lwd=3, ylim = c(0, 100), col=colors[i], ylab = "pourcentage")
  par(new = TRUE)
}
par(cex = 0.8)
legend("center", bty = "n",legend=colnames(table_rcrt), lty=1,col=colors[seq(1,4)])
par(cex = 1)
title("Evolution des contrats d'emploi entre 2008 et 2017 ")

########################EVOLTION DE L AGE####################"

ages = matrix(ncol = 5, nrow = 0)

s = rep(0, 5)

for(a in annee){
  ages <- rbind(ages, table(cut(as.numeric(sub(",", ".", getAttYear(a, "Age.CE")$Age.CE, fixed = TRUE)), c(18, 30, 40, 50, 60, 80))))
}

cut(as.numeric(sub(",", ".", getAttYear(2008, "Age.CE")[, c("Age.CE", "CA.Réaliser")], fixed = TRUE)), c(18, 30, 40, 50, 60, 80))


vide = c()
for(a in annee){
  vide = c(vide, sum(as.numeric(getAttYear(a, "Age.CE")$Age.CE == "")))
}
ages = cbind(ages, vide)

table(get)

sum(empty_ages)
table(data$Age.CE)

for(i in 1:6){
  ages[,i] = ages[,i]/sum(ages[,i])
  
  plot(annee, ages[,i], type = "l", lwd = 3,ylim = c(0, 0.22), col=colors[i], ylab = "pourcentage")
  par(new = TRUE)
}

par(cex = 0.7)
legend("topright", bty = "n",legend=colnames(ages), cex=0.7, lty=1,col=colors[seq(1,6)])
par(new = T)
par(cex = 1.2)

title("Evolution des différentes catégories d'âges entre 2008 et 2017")
###################evolution des activites


acts = matrix(ncol = length(table(data$Activité)), nrow=0)

for(a in annee){
  acts = rbind(acts, table(getAttYear(a, "Activité")$Activité))
}

colnames(acts) = c("Vide", colnames(acts)[seq(2,14)])
mar = c(0)
for(i in 1:14){
  acts[,i] = acts[,i]/sum(acts[,i])
  plot(annee, acts[,i], type = "l", lwd = 3,ylim = c(0, 0.42), col=colors[i], ylab = "pourcentage")
  par(new = T)
}

legend("topright", bty = "n",legend=colnames(acts), cex=0.5, lwd=1,col=colors[seq(1,14)])
par(cex = 1.2)
title(main="Evolution des activités entre 2008 et 2017")
###################evolution de l'effectif

eff_d = matrix(ncol=length(table(data$Activité)) + 1, nrow=length(unique(data$Activité)))
for(a in annee){
  eff_d = cbind(eff_d, aggregate(.~ Activité, getAttYear(a, c("Activité", "Effectif.total"))[,c(1,2)], sum)[,2])
}

aggregate(.~ Activité, getAttYear(2008, c("Activité", "Effectif.total"))[,c(1,2)], sum)
table()

plot(eff_d,type="l", xlab="annee", ylab="effectif moyen")
title(main= "evolution de l'effectif moyen par entreprise entre 2008-2017")


eff_acts = matrix(ncol = length(table(data$Activité)), nrow=0)

aggregate(.~ Activité , getAttYear(annee, c("Activité", "Effectif.total")), sum)

for(a in annee){
  eff_acts = rbind(eff_acts, table(getAttYear(a, c("Activité", "Effectif.total"))$Effectif.total))
}

eff_acts
table(data$Activité)
ages
ages
plot(data$Age.CE)

table(data$Age.CE)

s = data[,data$Age.CE %in% seq(18,20)]

annee = unique(data$X..Date)


percentages = y / replicate(3, margin.table(y, 1))
percentages

annee = unique(data[, "X..Date"])
annee

data_per_year = matrix(nrow = 0, ncol = length(annee), 0)

for(an in annee){
  print(paste0("annee_", an," = subset(data, X..Date = ",an, ")"))
}

annee_2008 = (subset(data, X..Date == "2008"))
annee_2009 = subset(data, X..Date == "2009")
annee_2010 = subset(data, X..Date == "2010")
annee_2011 = subset(data, X..Date == "2011")
annee_2012 = subset(data, X..Date == "2012")
annee_2013 = subset(data, X..Date == "2013")
annee_2014 = subset(data, X..Date == "2014")
annee_2015 = subset(data, X..Date == "2015")
annee_2016 = subset(data, X..Date == "2016")
annee_2017 = subset(data, X..Date == "2017")


data_per_year

mean(as.numeric(annee_2008$Age.CE))
moy_age = c(mean(as.numeric(annee_2008$Age.CE)), mean(as.numeric(annee_2009$Age.CE)), mean(as.numeric(annee_2010$Age.CE)), mean(as.numeric(annee_2011$Age.CE)), mean(as.numeric(annee_2012$Age.CE)), mean(as.numeric(annee_2013$Age.CE)), mean(as.numeric(annee_2014$Age.CE)), mean(as.numeric(annee_2015$Age.CE)), mean(as.numeric(annee_2016$Age.CE)), mean(as.numeric(annee_2017$Age.CE)))

moy_age
plot(annee, moy_age, xlab = "annee", ylab="moyenne d'age", col="red", type="l")

par(new = T)

plot(annee, moy_age, xlab = "annee", ylab="moyenne d'age", col="red", type="l")


x = subset(rawData, AnnéeFermée1 = 2009, select=c(AnnéeFermée1, Accès.Internet))
y = table(x)
percentages = y / replicate(3, margin.table(y, 1))
percentages



subset(data, CDI, select = c(X..Date, CDI))

data[, "X..Date"] = as.numeric(data[, "X..Date"])

annee = as.numeric(annee)
cdd = c()
annee
cdi = c()
int = c()
app = c()


for(an in annee){
  cdd = c(sum(subset(data, X..Date == an)$CDD, na.rm = T), cdd)
  cdi = c(sum(subset(data, X..Date == an)$CDI, na.rm = T), cdi)
  int = c(sum(subset(data, X..Date == an)$Intérimaires, na.rm = T), int)
  app = c(sum(subset(data, X..Date == an)$Apprentis, na.rm = T), app)
  
}


sum = cdd + cdi + int + app


cdd

sum(as.numeric(annee_2008$CDD), na.rm = T)
cdd_2008

#par(new)
plot(annee, cdd/sum * 100)

par("new")



plot(annee, app/sum, type="l", ylim = c(0,1), ylab = "pourcentage", labels = c("cdi", "cdd", "apprenti","interimaires"))
lines(annee, cdd/sum)
lines(annee, cdi/sum, col="red")
lines(annee, int/sum, col="yellow")



app/sum * 100
cdi/sum * 100
cdd/sum * 100

CDD
plot(data$X., CDD)

y = table(x)

percentages = y / replicate(3, margin.table(y, 1))
percentages
