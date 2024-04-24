using System;
using System.Text;
using RabbitMQ.Client;
using RabbitMQ.Client.Events;

class Program
{
    static void Main(string[] args)
    {
        var factory = new ConnectionFactory()
        {
            HostName = "srv508250.hstgr.cloud",
            UserName = "aluno",
            Password = "changeme"
        };

        using var connection = factory.CreateConnection();
        using var channel = connection.CreateModel();
        {
            channel.QueueDeclare(queue: "Fila-Alberto",
                                 durable: false,
                                 exclusive: false,
                                 autoDelete: false,
                                 arguments: null);
            string message = "Fila.Rabbit.Alberto";
            var body = Encoding.UTF8.GetBytes(message);
            channel.BasicPublish(exchange: "",
                                 routingKey: "Fila-Alberto",
                                 basicProperties: null,
                                 body: body);
            Console.WriteLine(" [x] Sent {0}", message);
        }

        Console.WriteLine(" Press [enter] to exit.");
        Console.ReadLine();


    }
}
