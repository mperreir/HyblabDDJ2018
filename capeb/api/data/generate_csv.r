data = read.csv('CAPEBPaysDelaLoire_2014-2017.csv', header=TRUE, sep=",", encoding ="UTF-8")
attach(data)


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

