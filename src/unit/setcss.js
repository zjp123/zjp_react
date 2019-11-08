function setCss(obj,oAttr)
{
	var sName="";
	var aName=["Webkit","Moz","O"];
	for(sName in oAttr)
	{
		if(sName.charAt(0)==="$")
		{
			for(var i=0;i<aName.length;i++)
			{
				obj.style[aName[i]+sName.substring(1)]=oAttr[sName];
			}
			obj.style[sName.substring(1)]=oAttr[sName];
		}
		else
		{
			obj.style[sName]=oAttr[sName];
		}
	}
}