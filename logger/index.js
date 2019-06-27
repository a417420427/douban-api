import path from 'path'
import log4js from 'koa-log4'

log4js.configure({
    appenders: {
        //访问日志
        access: {
            type: 'dateFile',
            pattern: '-yyyy-MM-dd.log', //通过日期来生成文件
            alwaysIncludePattern: true, //文件名始终以日期区分
            encoding: "utf-8",
            filename: path.join('logs/', 'access.log') //生成文件路径和文件名
        },
        //系统日志
        application: {
            type: 'dateFile',
            pattern: '-yyyy-MM-dd.log', //通过日期来生成文件
            alwaysIncludePattern: true, //文件名始终以日期区分
            encoding: "utf-8",
            filename: path.join('logs/', 'application.log') //生成文件路径和文件名
        },
        error: {
            type: "stderr", //日志级别过滤
            pattern: '-yyyy-MM-dd.log',
            alwaysIncludePattern: true, //文件名始终以日期区分
            encoding: "utf-8",
            filename: path.join('logs/', 'application.log') //生成文件路径和文件名
        },
        out: {
            type: 'console'
        }
    },
    categories: {
        default: { appenders: ['out'], level: 'info' },
        access: { appenders: ['access'], level: 'info' },
        error: { appenders: ['error'], level: 'error' },
        application: { appenders: ['application'], level: 'WARN' }
    }
});

export const accessLogger = () => log4js.koaLogger(log4js.getLogger('access')); //记录所有访问级别的日志
export const errorLogger = () => log4js.koaLogger(log4js.getLogger('error'))
export const systemLogger = log4js.getLogger('application');  //记录所有应用级别的日志
