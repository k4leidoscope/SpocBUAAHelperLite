            if (oSession.uriContains("updKcnrSfydNew")) {
                oSession["ui-color"] ="gold";
                oSession.utilDecodeRequest();
                var str=oSession.GetRequestBodyAsString();
                var json=JObject.Parse(str);
                json["bfjd"]=100;
                json["bfsj"]=114514;
                json["sfyd"]=1;
                oSession.utilSetRequestBody(json.ToString());
            }