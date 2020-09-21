<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    /**
     * @Route("/", name="home")
     */
    public function index()
    {
        return $this->render('home/index.html.twig', [
            'controller_name' => 'HomeController',
        ]);
    }

    /**
     * @Route("/forms", name="forms")
     */
    public function forms()
    {
        return $this->render('home/forms.html.twig', [
            'controller_name' => 'HomeController',
        ]);
    }
    /**
     * @Route("/cartegrise", name="cartegrise")
     */
    public function cartegrise_content()
    {
        return $this->render('home/cartegrise_content.html.twig', [
            'controller_name' => 'HomeController',
        ]);
    }
    /**
     * @Route("/contact", name="contact")
     */
    public function contact()
    {
        return $this->render('home/contact.html.twig', [
            'controller_name' => 'HomeController',
        ]);
    }
    /**
     * @Route("/connexion", name="connexion")
     */
    public function connexion()
    {
        return $this->render('home/connexion.html.twig', [
            'controller_name' => 'HomeController',
        ]);
    }
}
