import { afterEveryRender, afterNextRender, Component, effect, OnDestroy, signal } from '@angular/core';
import { Title } from '../../components/title/title';

const log = (...message: string[]) => {
  console.log(`${message[0]} %c${message.slice(1).join(', ')}`, 'color: #bada55')
}

@Component({
  selector: 'app-home-page',
  imports: [Title],
  templateUrl: './home-page.html',
})
export class HomePage implements OnDestroy {

  traditionProperty = 'Kevin';
  signalProperty = signal('Kevin');

  changeTradicion() {
    this.traditionProperty = 'Kevin Barzola'
  }

  changeSignal() {
    this.signalProperty.set('Kevin Barzola');
  }

  constructor() {
    console.log('Constructor llamado');

    /*setTimeout(() => {
      // this.traditionProperty = 'Juan Carlos'; (No cambia pq estamos utilizando provideZonelessChangeDetection)
      this.signalProperty.set('Juan Carlos')
      console.log('Hecho')
    }, 2000); */
  }

  basicEffect = effect((onClenaup) => {
    log('Effect', 'Disparar efectos secundarios');

    onClenaup(() => {
      log('onClenaup', 'Se ejecuta cuando el efecto se va a destruir');
    });
  })


  ngOnInit() {
    log("ngOnInit", "Runs once after Angular has initialized all the component's inputs.")
  }

  ngOnChanges() {
    console.log("ngOnChanges", "Runs every time the component's inputs have changed.")
  }

  ngDoCheck() {
    log("ngDoCheck", "Runs every time this component is checked for changes.")
  }

  ngAfterContentInit() {
    log("ngAfterContentInit", "Runs once after the component's content has been initialized.")
  }

  ngAfterContentChecked() {
    log("ngAfterContentChecked", "Runs every time this component content has been checked for changes.")
  }
  ngAfterViewInit() {
    log("ngAfterViewInit", "Runs once after the component's view has been initialized.")
  }

  ngAfterViewChecked() {
    log("ngAfterViewChecked", "Runs every time the component's view has been checked for changes.")
  }

  ngOnDestroy() {
    console.log("Runs once before the component is destroyed.")
  }

  afterNextRenderEffect = afterNextRender(() => {
    log('afterNextRender', 'Runs once the next time that all components have been rendered to the DOM.')
  })

  afterEveryRenderrEffect = afterEveryRender(() => {
    log('afterEveryRender', 'Runs every time all components have been rendered to the DOM.')
  })

}
