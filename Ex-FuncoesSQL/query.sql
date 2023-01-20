select * from farmacia;

select * from usuarios;

select count(distinct medicamento) from farmacia;

select min(idade) from usuarios;

select max(idade) from usuarios;

select avg(idade) from usuarios where idade >= 18;

select sum(estoque) from farmacia where categoria = 'blue' or categoria = 'black';

select categoria, sum(estoque) as QuantidadeRemedio
from farmacia where categoria is not null group by categoria;

select sum(estoque) from farmacia where categoria is null;

select count(distinct medicamento) from farmacia where categoria is null;

select concat(medicamento,' ', '(' ,categoria, ')') from farmacia where categoria is not null;

select concat(id, '-', medicamento, ' ', '(',coalesce(categoria, 'sem categoria'), ')') from farmacia; 

select nome, idade, cast(cadastro as date) from usuarios where cadastro like '2020%';

select nome, idade, email, age(cast(cadastro as timestamp)) as tempocadastro
from usuarios where idade < 18;

select nome, idade, email, age(cast(cadastro as date)) as tempocadastro
from usuarios where idade >= 60;

select categoria, count(distinct medicamento) as Quantidadeprodutos from farmacia
where categoria is not null group by categoria;

select idade, count(id) as quantidaderegistro from usuarios
where idade >= 18 group by idade;

select categoria, sum(estoque) from farmacia
group by (categoria);