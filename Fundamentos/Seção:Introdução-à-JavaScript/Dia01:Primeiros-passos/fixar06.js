let candidato = 'lista';
switch (candidato) {
    case 'Aprovado':
    console.log('Parabéns, você foi aprovada(o)!');
    break;

    case 'lista':
        console.log('Você está na nossa lista de espera');
        break;

    case 'Reprovado':
        console.log('Você foi reprovada(o)');
        break;

    default:
        console.log('Informação incorreta');
}