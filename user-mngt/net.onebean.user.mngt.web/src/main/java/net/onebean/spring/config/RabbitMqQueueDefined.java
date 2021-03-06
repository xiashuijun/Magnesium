package net.onebean.spring.config;

import net.onebean.user.mngt.common.MqExchangeNameEnum;
import net.onebean.user.mngt.common.MqQueueNameEnum;
import org.springframework.amqp.core.ExchangeBuilder;
import org.springframework.amqp.core.FanoutExchange;
import org.springframework.amqp.core.Queue;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RabbitMqQueueDefined {

    @Bean
    public Queue uagCloudControlOperationLog() {
        return new Queue(MqQueueNameEnum.UAG_CLOUD_CONTROL_OPERATION_LOG.getName());
    }
    @Bean
    public Queue uagUserAccountResetPassword() {
        return new Queue(MqQueueNameEnum.UAG_USER_ACCOUNT_RESET_PASSWORD.getName());
    }

    @Bean
    public Queue devopsInitUagAccountTable() {
        return new Queue(MqQueueNameEnum.DEVOPS_INIT_UAG_ACCOUNT_TABLE.getName());
    }

    @Bean
    FanoutExchange uagCreateAccountFanoutExchange() {
        return new FanoutExchange(MqExchangeNameEnum.UAG_CREATE_ACCOUNT_FANOUT_EXCHANGE.getName());
    }


}
