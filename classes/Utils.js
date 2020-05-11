class Utils{
    //Metodo estatico, sem criar instancia da classe
    static dateFormat(date){
        return date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear()+ ' ' + date.getHours()+ ':' + date.getMinutes();
    }

}