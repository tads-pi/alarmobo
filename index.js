export async function azureCosts(event, context) {
    console.log("EVENT: \n" + JSON.stringify(event, null, 2))
    console.log("CONTEXT: \n" + JSON.stringify(context, null, 2))



    /**
     * TODO!
     * * entrar na pag da azure e pegar current cost
     * * salvar info de preço no redis ou dynamo, se estiver diferente do último registro -> msg no zap
     * * * rodar de hora em hora ou dia em dia??
     * * se der erro ou o cost for > X printar e mandar msg no zap
     * * * integation wpp pra mandar msg
     * * github actions de deploy!
     */
}

azureCosts()