function CreateModelInf()
{
   var   i,j;
   i = 0;
   gModelInfo[i] = SetModelInf('2007');
   j = 0;
   gModelInfo[i].CodeList[j++] = SetModelCode('RE1');
   gModelInfo[i].CodeList[j++] = SetModelCode('RE2');
   gModelInfo[i].CodeList[j++] = SetModelCode('RE3');
   gModelInfo[i].CodeList[j++] = SetModelCode('RE4');
   gModelInfo[i].CodeList[j++] = SetModelCode('RE5');
   gModelInfo[i].CodeList[j++] = SetModelCode('RE6');
   i++;
   gModelInfo[i] = SetModelInf('2008');
   j = 0;
   gModelInfo[i].CodeList[j++] = SetModelCode('RE1');
   gModelInfo[i].CodeList[j++] = SetModelCode('RE2');
   gModelInfo[i].CodeList[j++] = SetModelCode('RE3');
   gModelInfo[i].CodeList[j++] = SetModelCode('RE4');
   i++;
}
function SetModelInf(strYear)
{
   var  data = new Array;
   data.Year = strYear;
   data.CodeList = new Array;
   return data;
}
function SetModelCode(strCode)
{
   var  data = new Array;
   data.Code = strCode;
   return data;
}
function SetManualType()
{
   gSmFlag = 1;
   gBrmFlag = 1;
}
