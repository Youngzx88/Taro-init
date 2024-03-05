import { Button, Text, View } from "@tarojs/components";
import { useEffect, useState } from "react";
import { CommonApi } from "../../api/index";
import { useSystemStore } from "../../models/system";

export default function Index() {

  const [data,setData] = useState()
  const {state,actions} = useSystemStore();
  useEffect(()=>{
    initData()
  },[])

  const initData = async ()=>{
    const res = await CommonApi.testPhpApi({userName:'youngzx',password:'youngzx'})
    setData(res.data.data.location)
  }

  const changeToken = () => {
    actions.setToken()
  }

  return (
    <View className="index">
      <Text>首页</Text>
      <View>{data}</View>
      <View>{state?.token}</View>
      <Button onClick={()=>{changeToken()}}>change Token</Button>
    </View>
  );
}
