import LanguageService from '../service/graphql/Language'

export const plainListToGql = (options)=>{
    let tempOptions = "["
    options.forEach(option => {
        let objectStr = "{"
        for(const key in option){
           objectStr += `${key}:"${option[key]}",`
        }
        let extractedObjStr = objectStr.slice(0,-1) + "}"
        tempOptions += extractedObjStr + ","
    });
     return tempOptions.slice(0,-1) + "]"
}

export const gqlToLanguageOptions = (languageList, fieldName)=>{

    let langOptions = []
    languageList.forEach(lang => {
        const tempOption = {
            lang_code:lang.lang_code,
            title: lang[fieldName],
        }
        langOptions.push(tempOption)
    });
    // this.setState({langOptions:langOptions})
    return langOptions
}

export const getDefaultLanguageOptions=(cb)=>{
    let options =[]
    LanguageService.getLanguages(response=>{
        if(response.status === 1){
            response.data.langs.forEach(lang => {
                    const tempOption = {
                        lang_code:lang.lang_code,
                        title:""
                    }
                    options.push(tempOption)
                    cb(options)
            });
        }
    })
}

// export const getSelectedOption = (value)=>{
//     const found = operatorOptions.find((item)=>{
//        return(
//          item.value === value
//        )
//      })
//      return found;
//  }