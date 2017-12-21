import {Component} from '@angular/core';
import {WorkerService} from './worker.service';
import threads from 'threads';
import md5 from 'js-md5';
import {Observable} from 'rxjs/Observable';

declare let importScripts;
declare let moment;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  fromPool(pool) {
    return new Observable(observer => {
      pool
        .on('done', function (data) {
          observer.next(data);
        })
        .on('error', function (error) {
          observer.error(error);
        })
        .on('finished', function () {
          observer.complete();
          pool.killAll();
        });
    });
  }

  constructor(private _worker: WorkerService) {
    //   const thread = threads.spawn(function ([a, b]) {
    //     // Remember that this function will be run in another execution context.
    //     return new Promise(resolve => {
    //       setTimeout(() => resolve(a + b), 4000)
    //     })
    //   });

    //   thread
    //     .send([ 9, 12 ])
    //     // The handlers come here: (none of them is mandatory)
    //     .on('message', function(response) {
    //       console.log('9 + 12 = ', response);
    //       thread.kill();
    //     });
    // }

    const pool = new threads.Pool();
    const pool2 = new threads.Pool();
    const widgetProcess = pool.run((input, done) => {
        importScripts('https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.17.1/moment.min.js');
        done(input);
      }
    ).send({data: 1});

    pool.run((input, done) => {
        importScripts('https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.17.1/moment.min.js');
        done(input);
      }
    ).send({data: 1});



    this.fromPool(widgetProcess).subscribe(next => {
      console.log(next);
    }, err => {
    }, () => {
      console.log('completed');
    });

    // Promise.all([
    //   jobC.send({data: 1}).promise(),
    //   jobC.send({data: 2}).promise()
    // ]).then(function allResolved() {
    //   console.log('Everything done! It\'s closing time...');
    // });

    // jobC
    //   .on('done', function (hash, input, d) {
    //     console.log(d);
    //     ;
    //     console.log(`Job C hashed: md5("${input}") = "${hash}"`);
    //   });
    // .on('finished', function() {
    //   console.log('Everything done, shutting down the thread pool.');
    //   pool.killAll();
    // });
  }
}
