// const tg=window.Telegram.WebApp;//bylo wot tak


export function useTelegram(){
  const tg=window.Telegram.WebApp;//?

  const onClose=()=>{
    tg.close()
  }
  const onToggleButton=()=>{
    if(tg.MainButton.isVisible){
      tg.MainButton.isVisible.hide();
    }else{
      tg.MainButton.show()
    }
  }
  return{
    onClose,
    onToggleButton,
    tg,
    user:tg.initDataUnsafe?.user,
  }
}