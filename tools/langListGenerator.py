langs = "endeesfritjpkonlplptruarzhhisvnodacshutr"
langlst = []

for i in range(0, len(langs), 2):
    langlst.append(langs[i:i+2])
    
#for i in range(len(langlst)):
#    print(f'"{langlst[i]}": {langlst[i]}_getText,')

for i in range(len(langlst)):
    print(f'{langlst[i]}')